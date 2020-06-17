import Model from "./Model";

export default class User extends Model {
    resource() {
        return "users";
    }

    // computed properties are reactive -> user.fullname
    // make sure to use "get" prefix
    get fullname() {
        return `${this.first_name} ${this.last_name}`;
    }

    block() {
        this.blocked_at = new Date().toISOString();
        return this;
    }

    unblock() {
        this.blocked_at = null;
        return this;
    }

    /**
     * restore after soft delete
     */
    restore() {
        let url = `${this.endpoint()}/restore`;
        return this.request({
            method: "POST",
            url: url,
            data: this
        }).then(response => {
            let self = Object.assign(this, response.data);
            return self;
        });
    }
}
