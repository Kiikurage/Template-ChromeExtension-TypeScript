import * as React from 'react';
import * as style from './OptionsPageRoot.scss';
import StorageChange = chrome.storage.StorageChange;

interface Props {}

interface State {
	foo: string;
}

interface Options {
	foo: string;
}

const DEFAULT_OPTIONS: Options = {
	foo: 'foo'
};


export class OptionsPageRoot extends React.Component<Props, State> {
	private readonly onChromeStorageChangedHandler: OptionsPageRoot['onChromeStorageChanged'];
	private fooInput: HTMLInputElement | null = null;

	constructor(props: Props) {
		super(props);

		this.state = {
			foo: DEFAULT_OPTIONS.foo
		};

		this.onChromeStorageChangedHandler = this.onChromeStorageChanged.bind(this);
		this.loadOption();
	}

	componentDidMount() {
		chrome.storage.onChanged.addListener(this.onChromeStorageChangedHandler);
	}

	componentWillUnmount() {
		chrome.storage.onChanged.removeListener(this.onChromeStorageChangedHandler);
	}

	private onChromeStorageChanged(_changes: { [key: string]: StorageChange }, areaName: string) {
		if (areaName !== 'sync') return;

		this.loadOption();
	}

	private onSaveButtonClick() {
		chrome.storage.sync.set({
			foo: this.fooInput ? this.fooInput.value : DEFAULT_OPTIONS.foo
		});
	}

	private onFooChange(ev: React.FormEvent<HTMLInputElement>) {
		this.setState({
			foo: ev.currentTarget.value
		});
	}

	private loadOption() {
		chrome.storage.sync.get(DEFAULT_OPTIONS, (options) => {
			this.setState({
				foo: options.foo
			});
			this.forceUpdate();
		});
	}

	render() {
		return (
			<div className={ style.OptionsPageRoot }>
				<h1>Template-ChromeExtension-TypeScript</h1>

				<p>
					<label>
						<span>Foo</span>
						<input ref={ (ref) => this.fooInput = ref }
							   value={ this.state.foo }
							   onChange={ ev => this.onFooChange(ev) }/>
					</label>
				</p>

				<p>
					<button onClick={ () => this.onSaveButtonClick() }>
						Save
					</button>
				</p>
			</div>
		);
	}
}
