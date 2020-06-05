const url = $request.url;
var body = $response.body;

if (url.indexOf('/x/v2/account/mine?access_key') != -1){ 
	body=JSON.parse(body) 
	body['data']['sections'].splice(0,1) 
	body['data']['sections'][0]['items'].splice(3,1) 
	body['data']['sections'][0]['items'].splice(4,3) 
	body['data']['sections'].splice(1,1) 
	body=JSON.stringify(body) 
} 

$done({ body })