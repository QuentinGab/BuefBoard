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

    get isTrashed() {
        return this.hasOwnProperty("deleted_at") && this.deleted_at !== null;
    }

    get isBlocked() {
        return this.hasOwnProperty("blocked_at") && this.blocked_at !== null;
    }

    get email_verified() {
        return (
            this.hasOwnProperty("email_verified_at") &&
            this.email_verified_at !== null
        );
    }

    get blocked_date() {
        if (!this.blocked) {
            return null;
        }
        return new Date(this.blocked_at);
    }

    get deleted_date() {
        if (!this.trashed) {
            return null;
        }
        return new Date(this.deleted_at);
    }

    /**
     * block the user
     * a call to save is necessary
     */
    block() {
        this.blocked_at = new Date().toISOString();
        return this;
    }

    /**
     * unblock the user
     * a call to save is necessary
     */
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
            let self = Object.assign(this, response.data.data);
            return self;
        });
    }

    /**
     * destroy permanently user
     */
    destroy() {
        let url = `${this.endpoint()}/destroy`;
        return this.request({
            method: "DELETE",
            url: url
        });
    }

    updateAvatar(formData) {
        return this.request({
            method: "POST",
            url: `${this.endpoint()}/avatar`,
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            let self = Object.assign(this, response.data.data);
            return self;
        });
    }

    deleteAvatar() {
        return this.request({
            method: "DELETE",
            url: `${this.endpoint()}/avatar`
        });
    }

    updatePassword(data) {
        return this.request({
            method: "PUT",
            url: `${this.endpoint()}/password`,
            data: data
        });
    }

    sendEmailVerification() {
        return this.request({
            method: "POST",
            url: `${this.endpoint()}/send-email-verification`,
            data: this
        }).then(response => {
            let self = Object.assign(this, response.data);
            return self;
        });
    }
}
