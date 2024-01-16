package main

import (
	"github.com/mattermost/mattermost-server/v6/plugin"
)

func main() {
	plugin.ClientMain(&Plugin{})
}

type Plugin struct {
	plugin.MattermostPlugin
}

func (p *Plugin) OnActivate() error {
	return nil
}
