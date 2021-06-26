let obj = JSON.parse($response.body);
obj =
{
  "status" : true,
  "subscription" : {
    "stripe" : null,
    "expiry" : "2050-01-01T00:00:00Z",
    "status" : 1,
    "id" : 5357,
    "originalTransactionID" : "1000000832914633",
    "environment" : "ProductionSandbox",
    "created" : "2020-01-01T00:00:00Z",
    "preAppstore" : false
  }
}
$done({body: JSON.stringify(obj)});
