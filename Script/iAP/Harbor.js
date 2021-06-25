let obj = JSON.parse($response.body);
obj["subscriber"]["subscriptions"]= {
      "io.pixelfoundry.Harbor.yearly": {
        "is_sandbox": true,
        "ownership_type": "PURCHASED",
        "billing_issues_detected_at": null,
        "period_type" : "normal",
        "unsubscribe_detected_at": null,
        "expires_date": "2050-01-01T00:00:00Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date": "2020-01-01T00:00:00Z",
        "purchase_date": "2020-01-01T00:00:00Z",
        "store": "app_store"
      }
    };
obj["subscriber"]["entitlements"]= {
      "premium": {
        "grace_period_expires_date" : null,
        "purchase_date": "2020-01-01T00:00:00Z",
        "product_identifier": "io.pixelfoundry.Harbor.yearly",
        "expires_date": "2050-01-01T00:00:00Z"
      }
    };
$done({body: JSON.stringify(obj)});
