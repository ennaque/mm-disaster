GO ?= $(shell command -v go 2> /dev/null)
GOFLAGS ?= $(GOFLAGS:)
NPM ?= $(shell command -v npm 2> /dev/null)
CURL ?= $(shell command -v curl 2> /dev/null)
GOPATH ?= $(shell go env GOPATH)
DEFAULT_GOOS := $(shell go env GOOS)
DEFAULT_GOARCH := $(shell go env GOARCH)

export GO111MODULE=on

BUNDLE_NAME ?= mm-disaster3.tar.gz

.PHONY: server
server:
	cd server && env CGO_ENABLED=0 GOOS=linux GOARCH=amd64 $(GO) build $(GO_BUILD_FLAGS) $(GO_BUILD_GCFLAGS) -trimpath -o dist/mm-disaster;

.PHONY: webapp
webapp: webapp/node_modules
	cd webapp && $(NPM) run build;

.PHONY: bundle
bundle:
	rm -rf dist/
	mkdir -p dist/

	mkdir -p dist/server
	cp -r server/dist dist/server/

	mkdir -p dist/webapp
	cp -r webapp/dist dist/webapp/

	cp plugin.json dist
	cd dist && COPYFILE_DISABLE=1 tar -cvzf ../$(BUNDLE_NAME) --exclude=./*.gz .

.PHONY: dist
dist:	server webapp bundle
