<template>
    <section>
        <title-bar
            class="p-1"
            title="Manage Users"
            :menu="[
                { name: 'users', to: { name: 'users.index' } },
                {
                    name: id ? 'edit' : 'new',
                    to: {
                        name: id ? 'users.edit' : 'users.new',
                        params: { id: id }
                    }
                }
            ]"
        ></title-bar>

        <div class="p-1">
            <div class="columns">
                <div class="column is-10-desktop is-8-fullhd">
                    <div class="bb-box">
                        <b-notification
                            v-if="user.trashed"
                            type="is-danger"
                            role="alert"
                            :closable="false"
                        >
                            <div class="level">
                                <div class="level-left">
                                    <b-icon icon="alert-circle"></b-icon>
                                    This user is trashed.
                                </div>
                                <div class="level-right">
                                    <b-button
                                        type="is-danger"
                                        @click="confirmRestore"
                                        >Restore</b-button
                                    >
                                </div>
                            </div>
                        </b-notification>
                        <b-notification
                            v-else-if="user.blocked"
                            type="is-warning"
                            role="alert"
                            :closable="false"
                            class="is-marginless"
                        >
                            <div class="level">
                                <div class="level-left">
                                    <b-icon icon="alert"></b-icon>
                                    This user is blocked.
                                </div>
                                <div class="level-right">
                                    <b-button
                                        type="is-warning"
                                        @click="unblockUser"
                                        >Unblock</b-button
                                    >
                                </div>
                            </div>
                        </b-notification>
                        <div class="p-1">
                            <b-field horizontal>
                                <template slot="label">
                                    <b-tag size="is-large"
                                        >#{{ user.id }}</b-tag
                                    >
                                </template>
                                <h1 class="title">
                                    {{ user.fullname }}
                                </h1>
                            </b-field>
                            <b-field horizontal label="Information">
                                <b-field
                                    label="First Name"
                                    label-for="first_name"
                                    expand
                                >
                                    <b-input
                                        id="first_name"
                                        v-model="user.first_name"
                                    ></b-input>
                                </b-field>
                                <b-field
                                    label="Last Name"
                                    label-for="last_name"
                                    expand
                                >
                                    <b-input
                                        id="last_name"
                                        v-model="user.last_name"
                                    ></b-input>
                                </b-field>
                            </b-field>

                            <b-field horizontal label="">
                                <b-field
                                    label="Email"
                                    label-for="email"
                                    :type="
                                        !user.email_verified
                                            ? 'is-warning'
                                            : null
                                    "
                                    :message="
                                        user.email_verified
                                            ? 'This email is verified'
                                            : 'This email is not verified'
                                    "
                                >
                                    <b-input
                                        id="email"
                                        type="email"
                                        disabled
                                        v-model="user.email"
                                    ></b-input>
                                </b-field>

                                <b-field
                                    label="Email verification"
                                    v-if="!user.email_verified"
                                >
                                    <b-button type="is-primary" outlined>
                                        Resend the verification email
                                    </b-button>
                                </b-field>
                            </b-field>

                            <b-field horizontal label="Roles">
                                <div
                                    class="field is-grouped is-grouped-multiline"
                                >
                                    <b-checkbox-button
                                        v-for="role in user.roles"
                                        :key="role.id"
                                        v-model="user.roles"
                                        :native-value="role"
                                        type="is-primary"
                                    >
                                        <span>{{ role.name }}</span>
                                    </b-checkbox-button>

                                    <b-checkbox-button
                                        v-for="role in differenceRoles(
                                            roles,
                                            user.roles
                                        )"
                                        :key="role.id"
                                        v-model="user.roles"
                                        :native-value="role"
                                        type="is-primary"
                                    >
                                        <span>{{ role.name }}</span>
                                    </b-checkbox-button>
                                </div>
                            </b-field>

                            <b-field horizontal label="">
                                <b-field>
                                    <div class="buttons">
                                        <b-button
                                            @click="saveUser"
                                            type="is-primary"
                                            :loading="this.loading.user"
                                            icon-left="content-save"
                                            >Save</b-button
                                        >
                                        <b-button
                                            @click="getUser"
                                            type="is-default"
                                            size="is-small"
                                            :loading="this.loading.user"
                                            icon-left="refresh"
                                        ></b-button>
                                    </div>
                                </b-field>
                                <b-field>
                                    <p class="control has-text-right">
                                        <b-button
                                            v-show="!user.trashed"
                                            @click="
                                                user.blocked
                                                    ? unblockUser()
                                                    : blockUser()
                                            "
                                            type="is-light"
                                            :loading="this.loading.user"
                                            >{{
                                                user.blocked
                                                    ? "Unblock"
                                                    : "Block"
                                            }}</b-button
                                        >
                                        <b-button
                                            @click="confirmDelete"
                                            type="is-light"
                                            :loading="this.loading.user"
                                            >{{
                                                user.trashed
                                                    ? "Destroy"
                                                    : "Delete"
                                            }}</b-button
                                        >
                                    </p>
                                </b-field>
                            </b-field>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TitleBar from "@b/components/TitleBar";
import differenceBy from "lodash/differenceBy";

import Role from "@b/models/Role";
import User from "@b/models/User";

export default {
    name: "UserForm",
    components: { TitleBar },
    props: {
        id: {
            default: null
        }
    },
    data() {
        return {
            user: new User({
                id: null,
                first_name: "",
                last_name: "",
                email: "",
                created_at: "",
                updated_at: "",
                deleted_at: null,
                email_verified_at: null,
                blocked_at: null
            }),
            roles: [],
            loading: {
                user: false,
                roles: false,
                email_verification: false
            }
        };
    },
    computed: {},
    methods: {
        differenceRoles(r1, r2) {
            return differenceBy(r1, r2, "id");
        },
        async getRoles() {
            this.loading.roles = true;

            this.roles = await Role.include("permissions")
                .$get()
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                });
            this.loading.roles = false;
        },

        async getUser() {
            this.loading.user = true;

            this.user = await User.include("roles")
                .$find(this.id)
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                });

            this.loading.user = false;
        },

        async saveUser() {
            await this.user
                .save()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${this.user.fullname} has been updated`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: false
                    });
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                });
        },

        async blockUser() {
            await this.user
                .block()
                .save()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${this.user.fullname} has been blocked`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: false
                    });
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                    this.getUser();
                });
        },
        async unblockUser() {
            await this.user
                .unblock()
                .save()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${this.user.fullname} has been unblocked`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: false
                    });
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                });
        },

        async restoreUser() {
            await this.user
                .restore()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${this.user.fullname} has been restored`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: false
                    });
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                });
            this.getUser();
        },
        async deleteUser() {
            await this.user
                .delete()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${this.user.fullname} has been trashed`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: false
                    });
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                });

            this.getUser();
        },
        async destroyUser() {
            await this.user
                .destroy()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${this.user.fullname} has been destroyed`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: false
                    });
                    router.push({ name: "users" });
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                    this.getUser();
                });
        },

        confirmRestore() {
            this.$buefy.dialog.confirm({
                title: "Restoring user",
                message: `Are you sure you want to <b>restore</b> ${this.user.fullname}? This action can be undone.`,
                confirmText: "Restore User",
                type: "is-primary",
                hasIcon: true,
                onConfirm: () => this.restoreUser()
            });
        },
        confirmDelete() {
            if (this.user.trashed) {
                return this.confirmDestroy();
            }
            this.$buefy.dialog.confirm({
                title: "Deleting user",
                message: `Are you sure you want to <b>delete</b> ${this.user.fullname}? This action can be undone.`,
                confirmText: "Delete User",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.deleteUser()
            });
        },
        confirmDestroy() {
            this.$buefy.dialog.confirm({
                title: "Destroying user",
                message: `Are you sure you want to <b>destroy</b> ${this.user.fullname}? This action can NOT be undone.`,
                confirmText: "Destroy User",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.destroyUser()
            });
        }
    },
    created() {
        this.getUser();
        this.getRoles();
    },
    mounted() {}
};
</script>
