const Axios = require(`axios`)
const FileSystem = require(`fs`)

Axios.get(`https://discord.com/api/v8/users/@me/relationships`, {
    "responseType": "stream",
    "headers": {
        "Authorization": process.argv[2],
        "Accept-Language": "en-US",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36",
        "Accept": "*/*",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://discord.com/channels/@me",
        "X-Super-Properties": Buffer.from(JSON.stringify({"os":"Windows","browser":"Discord Client","release_channel":"stable","client_version":"0.0.309","os_version":"10.0.19041","os_arch":"x64","system_locale":"en-US","client_build_number":80756,"client_event_source":null})).toString("base64")
    }
}).then((response) => response.data.pipe(FileSystem.createWriteStream(`friends.json`)))
