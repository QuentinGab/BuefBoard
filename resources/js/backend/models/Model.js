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
}
