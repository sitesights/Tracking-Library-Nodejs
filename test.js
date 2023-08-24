
import { SiteSights } from "./index.js"

const tracking = new SiteSights.Tracking({
    "apiKey": "MWBRfBhiwU2Srav4A_4Iog2oncYSt6mEWhkEXeMRp0_w"
});

let resPageView = await tracking.pageView({
    "Metrics": {
        "Browser": {
            "IP": "91.48.119.123",
            "UserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0"
        },
        "Identify": {
            "ClientId": null
        },
        "Language": {
            "Code": "en"
        },
        "Location": {
            "CountryCode": "AF",
            "ContinentCode": "AF",
            "City": "test",
            "Region": null,
            "RegionCode": null,
            "PostalCode": "33100",
            "Timezone": null
        },
        "Page": {
            "Absolute": "https://app.sitesights.io/analytics"
        },
        "Referrer": {
            "Absolute": null
        },
        "Screen": {
            "Width": 200,
            "Height": 200
        }
    }
});
console.log(resPageView);


let resEvent = await tracking.event({
    "Name": "test-event",
    "Parameters": [
        {
            "Name": "param1",
            "Value": "value2"
        },
        {
            "Name": "param2",
            "Value": "value3"
        }
    ],
    "Metrics": {
        "Browser": {
            "IP": "91.48.119.123",
            "UserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0"
        },
        "Identify": {
            "ClientId": null
        },
        "Language": {
            "Code": "en"
        },
        "Location": {
            "CountryCode": "AF",
            "ContinentCode": "AF",
            "City": "test",
            "Region": null,
            "RegionCode": null,
            "PostalCode": "33100",
            "Timezone": null
        },
        "Page": {
            "Absolute": "https://app.sitesights.io/analytics"
        },
            "Referrer": {
            "Absolute": null
        },
        "Screen": {
            "Width": 200,
            "Height": 200
        }
    }
});
console.log(resEvent);
