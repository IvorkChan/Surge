let obj=JSON.parse($response.body) 
 
 obj.account["pro_mode"] = true; 
 obj.account["plan_type"] = "Premium"; 
 obj.account["user_type"] = "Premium"; 
 obj.account["current_period"]["until"] = "2050-01-01T00:00:00"; 

$done({body:JSON.stringify(obj)})
