SRC := ./src
BUILD := ./build
WEBPACK_CONFIG := ./webpack.config.js

ts := $(shell find $(SRC) -name *.ts -o -name *.tsx)
scss := $(shell find $(SRC) -name "*.scss")
statics := $(shell find $(SRC)/static -name "*.*")

default: $(SRC)/*
	$(MAKE) build_all

build_all:
	mkdir -p $(BUILD)
	$(MAKE) build/script
	$(MAKE) build/static
	$(MAKE) build/style

build/script: $(ts) $(scss)
	webpack --config $(WEBPACK_CONFIG)

build/style: $(scss)
	npm run node-sass $(SRC)/style/style.scss $(BUILD)/style.css

build/static: $(statics)
	cp $(SRC)/static/* $(BUILD)/

clean:
	rm -rf $(BUILD)
