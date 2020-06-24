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
}
