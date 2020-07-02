let body = $response.body

    body['data']['vip_section'] = {};
    body['data']['vip_section_v2'] = {};
    body['data']['sections'] = body['data']['sections'].filter(
        function (item, index) {
            if ('创作中心' == item.title) {
                return false;
            }
            item.items = item.items.filter(function (section_items) {
                console.log(section_items.title);
                if ((['我的关注', '我的钱包', '会员购中心', '直播中心', '青少年模式', '看视频免流量', 'BW 成就'].includes(section_items.title))) {
                    return false;
                }
                return true;
            });
            return true;
        });
}

body = JSON.stringify(body);
$done({body});