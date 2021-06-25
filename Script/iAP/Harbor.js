let obj = JSON.parse($response.body);
obj["subscriber"]["subscriptions"]= {
      "io.pixelfoundry.Harbor.yearly": {
        "is_sandbox": true,
        "ownership_type": "PURCHASED",
        "billing_issues_detected_at": null,
        "unsubscribe_detected_at": null,
        "expires_date": "2050-01-01T00:00:00Z",
        "original_purchase_date": "2020-01-01T00:00:00Z",
        "purchase_date": "2020-01-01T00:00:00Z",
        "store": "app_store"
      }
    };
obj["subscriber"]["entitlements"]= {
      "premium": {
        "expires_date": "2050-01-01T00:00:00Z",
        "product_identifier": "revenuecat.pro.yearly",
        "purchase_date": "2020-01-01T00:00:00Z"
      }
    };
$done({body: JSON.stringify(obj)});
