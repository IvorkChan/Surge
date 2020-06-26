const up_blacklist = ['共青团中央'];
const title_blackwords = ['刘雨昕','陆柯燃','沙雕'];
const region_blacklist = ['宅舞','翻唱'];
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
        return item.id != 180 && item.id != 179
    });
    body['data']['tab'] = body['data']['tab'].filter(function (item) {
        return item.id != 39 && item.id != 151 && item.id != 51079 && item.id != 38247 && item.id != 65397 
    && item.id != 62192});
    body['data']['top'] = body['data']['top'].filter(function (item) {
        return item.id != 222
    });
}

body = JSON.stringify(body);
$done({body});