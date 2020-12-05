const up_blacklist = [];
const title_blackwords = [];
const region_blacklist = [];
let body = $response.body;
console.log($request.url)
console.log(body)
body = JSON.parse(body);

// 观看
if (-1 != $request.url.indexOf('/x/v2/view\?a') && 0 == body['code']) {
    body['data']['relates'] = body['data']['relates'].filter(function (item) {
        if (item.hasOwnProperty('is_ad')) {
            return false;
        }
        return true;
    });
}

// 排行
if (-1 != $request.url.indexOf('/x/v2/rank') && 0 == body['code']) {
    body['data'] = body['data'].filter(function (item) {
        if (up_blacklist.includes(item.name)) {
            return false;
        }
        return true;
    });
}

// 推送
if (-1 != $request.url.indexOf('/x/v2/feed') && 0 == body['code']) {
    body['data']['items'] = body['data']['items'].filter(function (item) {
        if (['ad_web_s', 'ad_web', 'live', 'banner', 'search_subscribe'].includes(item.card_goto)) {
            return false;
        }
        if (item.hasOwnProperty('ad_info')) {
            return false;
        }
        if (up_blacklist.includes(item.args.up_name)) {
            return false;
        }
        if (region_blacklist.includes(item.args.rname)) {
            return false;
        }
        for( let word of title_blackwords){
            if(-1 != item.title.indexOf(word)){
                return false;
            }
        }
        return true;
    });
}

// 搜索
if(-1 != $request.url.indexOf('search/resource') && 0 == body['code']){
    body['data'] = [];
}
if(-1 != $request.url.indexOf('search/trending') && 0 == body['code']){
    body['data'] = [];
}
if(-1 != $request.url.indexOf('search/recommend') && 0 == body['code']){
    body['data'] = [];
}
if (-1 != $request.url.indexOf('search/square?') && 0 == body['code']) {
   body['data']['trending'] = {};
}

// 评论
if (-1 != $request.url.indexOf('/x/v2/reply/main') && 0 == body['code']) {
    body['data']['notice'] = {};
}

// 标签
if (-1 != $request.url.indexOf('resource/show/tab?') && 0 == body['code']) {
    body['data']['bottom'] = body['data']['bottom'].filter(function (item) {
        return item.id != 101 && item.id != 104 && item.id != 105 && item.id != 179 && item.id != 180
    });
    body['data']['tab'] = body['data']['tab'].filter(function (item) {
        return item.id != 39 && item.id != 101 && item.id != 104 && item.id != 151 && item.id != 442 && item.id != 536 && item.id != 38247 && item.id != 51079});
    body['data']['top'] = body['data']['top'].filter(function (item) {
        return item.id != 107 && item.id != 108 && item.id != 222});
}

// 我的
if (-1 != $request.url.indexOf('/x/v2/account/mine') && 0 == body['code']) {
    body['data']['vip_section'] = {};
    body['data']['vip_section_v2'] = {};
    body['data']['sections_v2'] = body['data']['sections_v2'].filter(
        function (item, index) {
            if (['创作中心', '创作首页', '创作学院', '打卡挑战', '有奖活动', '推荐服务'].includes(item.title)) {
                return false;
            }
            item.items = item.items.filter(function (sections_v2_items) {
                console.log(sections_v2_items.title);
                if ((['我的课程', '看视频免流量', '个性装扮', '邀好友赚红包', '游戏中心', '我的钱包', '会员购中心', '直播中心', '反馈论坛', '充能领福利', '课堂模式', '青少年模式'].includes(sections_v2_items.title))) {
                    return false;
                }
                return true;
            });
            return true;
        });
}

body = JSON.stringify(body);
$done({body});
