{
  "id": "ivork.bosjs",
  "name": "Ivork BoxJS App",
  "author": "@Ivork",
  "icon": "https://avatars.githubusercontent.com/u/19368630?s=60&v=4",
  "repo": "https://github.com/IvorkChan/Surge",
  "apps": [  
    {
      "id": "Caiyun",
      "name": "彩云天气",
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
          "desc": "彩云天气的Token，可以自行申请或者前往频道获取"
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
      "author": "@Peng-YM",
      "repo": "https://github.com/Peng-YM/QuanX",
      "icons": [
        "https://raw.githubusercontent.com/Orz-3/mini/master/caiyun.png",
        "https://raw.githubusercontent.com/Orz-3/task/master/caiyun.png"
      ],
      "script": "https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/caiyun.js"
    },  
      ],
      "icons": [
        "https://github.com/Peng-YM/QuanX/blob/master/assets/icons/Surge_run_transparent.png?raw=true",
        "https://github.com/Peng-YM/QuanX/blob/master/assets/icons/Surge_run.png?raw=true"
      ]
    },
    {
      "id": "github-private-repo",
      "name": "Github私有仓库",
      "keys": [
        "@github_private_repo.username",
        "@github_private_repo.token"
      ],
      "author": "@Peng-YM",
      "repo": "https://github.com/Peng-YM/QuanX",
      "settings": [
        {
          "id": "@github_private_repo.username",
          "name": "Github用户名",
          "val": "",
          "type": "text",
          "desc": "你的Github用户名"
        },
        {
          "id": "@github_private_repo.token",
          "name": "Github仓库的Token",
          "val": "",
          "type": "text",
          "desc": "请参照脚本说明生成token，否则无法访问！"
        }
      ],
      "icons": [
        "https://raw.githubusercontent.com/58xinian/icon/master/Github_mini.png",
        "https://raw.githubusercontent.com/58xinian/icon/master/Github.png"
      ]
    },
    {
      "id": "next-dns",
      "name": "NextDNS",
      "author": "@Peng-YM",
      "repo": "https://github.com/Peng-YM/Sub-Store",
      "keys": [],
      "settings": [
        {
          "id": "@NextDNS.url",
          "name": "NextDNS绑定URL",
          "val": "",
          "type": "text",
          "desc": "NextDNS配置页面 > 已绑定的IP > 显示高级选项 > 最下面一行链接"
        },
        {
          "id": "@NextDNS.servers",
          "name": "DNS服务器",
          "val": "",
          "type": "text",
          "desc": "NextDNS配置页面 > 已绑定的IP > DNS服务器，注意需要用英文逗号分隔。"
        },
        {
          "id": "@NextDNS.silence",
          "name": "静默运行",
          "val": false,
          "type": "boolean",
          "desc": "打开后DNS绑定时不显示通知"
        }
      ],
      "icons": [
        "https://raw.githubusercontent.com/58xinian/icon/master/telegram_mini.png",
        "https://raw.githubusercontent.com/58xinian/icon/master/telegram.png"
      ]
    }
  ]
}
