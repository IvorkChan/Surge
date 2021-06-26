let obj = JSON.parse($response.body);
obj =
{
  "status" : true,
  "subscription" : {
    "stripe" : null,
    "expiry" : "2050-01-01T00:00:00Z",
    "status" : 1,
    "id" : 5360,
    "userID": "8780",
    "originalTransactionID" : null,
    "environment" : "ProductionSandbox",
    "created" : "2020-01-01T00:00:00Z",
  }
}
$done({body: JSON.stringify(obj)});
