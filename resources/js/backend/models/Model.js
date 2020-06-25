import { Model as BaseModel } from "vue-api-query";

export default class Model extends BaseModel {
    // define a base url for a REST API
    baseURL() {
        return "/api/v1";
    }

    // implement a default request method
    request(config) {
        return this.$http.request(config);
    }

    export() {
        let base = this._fromResource || `${this.baseURL()}/${this.resource()}`;
        base = this._customResource
            ? `${this.baseURL()}/${this._customResource}`
            : base;
        let url = `${base}${this._builder.query()}`;

        return window.location.replace(url);
    }

    /**
     * wrapping in data
     */
    _create() {
        return this.request({
            method: "POST",
            url: this.endpoint(),
            data: this
        }).then(response => {
            let self = Object.assign(this, response.data.data);
            return self;
        });
    }

    _update() {
        return this.request({
            method: "PUT",
            url: this.endpoint(),
            data: this
        }).then(response => {
            let self = Object.assign(this, response.data.data);
            return self;
        });
    }

    _date_diff_days(d1,d2){
        let ONE_DAY = (1000 * 3600 * 24);
        var diff = d2.getTime() - d1.getTime();
        return Math.ceil(diff / ONE_DAY);
    }
    date_diff(d1,d2,type){
        if(type == 'days'){
            return this._date_diff_days(d1,d2);
        }

        return this._date_diff_days(d1,d2);
    }
}
