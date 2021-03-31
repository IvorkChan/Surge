{
  "id": "ivork.app.sub",
  "name": "Ivork App",
  "author": "@ivork",
  "icon": "https://avatars.githubusercontent.com/u/19368630?v=4",
  "repo": "https://github.com/IvorkChan/Surge",
  "apps": [
    {
      "id": "ivork.weather",
      "name": "Weather",
      "keys": [
        "@caiyun.token.caiyun",
        "@caiyun.token.tencent",
        "@caiyun.display_location",
        "@caiyun.location.latitude",
        "@caiyun.location.longitude",
        "@caiyun.address"
      ],
      "settings": [
        {
          "id": "@caiyun.token.caiyun",
          "name": "彩云天气API Token",
          "val": null,
          "type": "text",
          "autoGrow": false,
          "rows": 2,
          "desc": "Token"
        },
        {
          "id": "@caiyun.token.tencent",
          "name": "腾讯地图API Token",
          "val": "AHEBZ-ASTWX-CIW4P-7TV7T-AWKLS-7CFWP",
          "type": "text",
          "rows": 1,
          "desc": ""
        },
        {
          "id": "@caiyun.display_location",
          "name": "是否在日志中显示经纬度",
          "val": false,
          "type": "boolean",
          "desc": ""
        },
        {
          "id": "@caiyun.location.latitude",
          "name": "纬度",
          "val": null,
          "type": "text",
          "desc": "纬度，可以关闭MITM获取位置，手动设置"
        },
        {
          "id": "@caiyun.location.longitude",
          "name": "经度",
          "val": null,
          "type": "text",
          "desc": "经度，可以关闭MITM获取位置，手动设置"
        }
      ],
      "author": "@Ivork",
      "repo": "https://github.com/IvorkChan/Surge",
      "icons": [
        "https://raw.githubusercontent.com/Orz-3/mini/master/caiyun.png",
        "https://raw.githubusercontent.com/Orz-3/task/master/caiyun.png"
      ],
      "script": "https://raw.githubusercontent.com/IvorkChan/Surge/master/Script/Cron/Colorful.js"
    },
  ]
}
