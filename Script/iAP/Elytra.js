let obj = JSON.parse($response.body);
obj =
{
  "status" : true,
  "subscription" : {
    "stripe" : null,
    "expiry" : "2021-06-25 19:59:20",
    "status" : 1,
    "id" : 5357,
    "originalTransactionID" : "1000000832914633",
    "environment" : "ProductionSandbox",
    "created" : "2021-06-25 18:58:21",
    "preAppstore" : false
  }
}
$done({body: JSON.stringify(obj)});
