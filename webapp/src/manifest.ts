const manifest = JSON.parse(`
{
    "id": "link.gitlab-skyeng.mm-disaster",
    "name": "MM-disaster",
    "icon_path": "assets/disaster_icon_new.svg",
    "min_server_version": "7.6.0",
    "server": {
        "executable": "server/dist/mm-disaster"
    },
    "webapp": {
        "bundle_path": "webapp/dist/main.js"
    }
}

`);

export default manifest;
export const id = manifest.id;
export const version = manifest.version;
export const pluginId = manifest.id;
