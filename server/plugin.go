package main

import (
	"github.com/mattermost/mattermost-server/v6/plugin"
)

type Plugin struct {
	plugin.MattermostPlugin
}

func (p *Plugin) OnActivate() error {
	return nil
}
