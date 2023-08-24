
import { URL } from "url";
import fetch from 'node-fetch';

const DEFAULT_SITESIGHTS_URL = "https://app.sitesights.io";

const REL_PAGE_VIEW = "/api/page-view";
const REL_EVENT = "/api/event-view";

class SiteSightsTracking {

    constructor(options) {

        this.options = options;
        this._validateOptions();

        this.urls = {
            "page-view": this.options.url + REL_PAGE_VIEW,
            "event": this.options.url + REL_EVENT,
        };

    }

    async pageView(data) {

        const response = await fetch(this.urls["page-view"], {
            "method": 'post',
            "body": JSON.stringify(data),
            "headers": {
                "Content-Type": "application/json",
                "Authorization": this.options.apiKey
            }
        });
        return await response.json();

    }

    async event(data) {

        const response = await fetch(this.urls["event"], {
            "method": 'post',
            "body": JSON.stringify(data),
            "headers": {
                "Content-Type": "application/json",
                "Authorization": this.options.apiKey
            }
        });
        return await response.json();

    }

    _validateOptions() {

        if(!this.options) {
            throw new Error("No SightSights options provided.");
        }

        let opts = this.options;
        this.options = { 
            "apiKey": opts.apiKey,
            "url": opts.url,
        };

        if(!this.options.url) {
            this.options.url = DEFAULT_SITESIGHTS_URL;
        }

        if(!this.options.apiKey || typeof this.options.apiKey !== "string") {
            throw new Error("No SightSights api key provided.");
        }

        if(!this._validateURL(this.options.url)) {
            throw new Error("Invalid SightSights url provided.");
        }

    }

    _validateURL(url) {

        try {

            new URL(url);

            return true;

        } catch (err) {

            return false;

        }

    }

}

export const SiteSights = {
    "Tracking": SiteSightsTracking
};
