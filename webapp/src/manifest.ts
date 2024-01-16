const manifest = JSON.parse(`
{
    "id": "playbooks",
    "name": "Playbooks",
    "description": "Mattermost Playbooks enable reliable and repeatable processes for your teams using checklists, automation, and retrospectives.",
    "homepage_url": "https://github.com/mattermost/mattermost-plugin-playbooks/",
    "support_url": "https://github.com/mattermost/mattermost-plugin-playbooks/issues",
    "release_notes_url": "https://github.com/mattermost/mattermost-plugin-playbooks/releases/tag/v1.39.1",
    "icon_path": "assets/plugin_icon.svg",
    "version": "1.39.1+c9cd2e23",
    "min_server_version": "7.6.0",
    "server": {
        "executables": {
            "darwin-amd64": "server/dist/plugin-darwin-amd64",
            "darwin-arm64": "server/dist/plugin-darwin-arm64",
            "linux-amd64": "server/dist/plugin-linux-amd64",
            "linux-arm64": "server/dist/plugin-linux-arm64",
            "windows-amd64": "server/dist/plugin-windows-amd64.exe"
        },
        "executable": ""
    },
    "webapp": {
        "bundle_path": "webapp/dist/main.js"
    },
    "settings_schema": {
        "header": "",
        "footer": "",
        "settings": [
            {
                "key": "EnableExperimentalFeatures",
                "display_name": "Enable Experimental Features:",
                "type": "bool",
                "help_text": "Enable experimental features that come with in-progress UI, bugs, and cool stuff.",
                "placeholder": "",
                "default": null
            }
        ]
    }
}
`);

export default manifest;
export const id = manifest.id;
export const version = manifest.version;
export const pluginId = manifest.id;
