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

        <div class="section">
            <div class="columns is-multiline">
                <div class="column is-12 is-6-fullhd">
                    <b-notification
                        v-if="user.trashed"
                        type="is-danger"
                        role="alert"
                        has-icon
                        icon="delete"
                        :closable="false"
                    >
                        <p>
                            This user is trashed. <br />

                            <b-tag>
                                {{
                                    user.date_diff(
                                        new Date(),
                                        user.deleted_date
                                    )
                                }}
                                days ago</b-tag
                            >
                        </p>
                    </b-notification>
                    <b-notification
                        v-else-if="user.blocked"
                        type="is-warning"
                        has-icon
                        role="alert"
                        :closable="false"
                    >
                        <p>
                            This user is blocked. <br />
                            <b-tag>
                                {{
                                    user.date_diff(
                                        new Date(),
                                        user.blocked_date
                                    )
                                }}
                                days ago
                            </b-tag>
                        </p>
                    </b-notification>
                    <div class="card">
                        <div class="card-header">
                            <p class="card-header-title">
                                <b-icon
                                    icon="account-circle"
                                    size="is-small"
                                ></b-icon>
                                <span>Information</span>
                            </p>
                        </div>
                        <div class="card-content">
                            <div class="">
                                <b-field horizontal>
                                    <template slot="label">
                                        <b-tag size="is-large">
                                            #{{ user.id }}
                                        </b-tag>
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

                                <hr />
                                <b-field horizontal label="Roles">
                                    <b-skeleton
                                        height="36px"
                                        :active="loading.roles"
                                    ></b-skeleton>

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
                                            v-for="role in differenceById(
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
                                <hr />
                                <b-field
                                    horizontal
                                    label="Permissions"
                                    v-if="user.permissions"
                                >
                                    <div
                                        class="field is-grouped is-grouped-multiline"
                                    >
                                        <b-checkbox-button
                                            v-for="permission in user.permissions"
                                            :key="permission.id"
                                            v-model="user.permissions"
                                            :native-value="permission"
                                            type="is-primary"
                                        >
                                            <span>{{ permission.name }}</span>
                                        </b-checkbox-button>

                                        <b-checkbox-button
                                            v-for="permission in differenceById(
                                                permissions,
                                                user.permissions
                                            )"
                                            :key="permission.id"
                                            v-model="user.permissions"
                                            :native-value="permission"
                                            type="is-primary"
                                        >
                                            <span>{{ permission.name }}</span>
                                        </b-checkbox-button>
                                    </div>
                                </b-field>
                                <hr />
                                <b-field horizontal label="">
                                    <b-field>
                                        <p class="control has-text-right">
                                            <b-button
                                                @click="saveUser"
                                                type="is-primary"
                                                :loading="this.loading.save"
                                                icon-left="content-save"
                                                :disabled="user.trashed"
                                                >Save</b-button
                                            >
                                            <b-button
                                                @click="getUser"
                                                type="is-default"
                                                :loading="this.loading.refresh"
                                                icon-left="refresh"
                                            ></b-button>
                                        </p>
                                    </b-field>
                                </b-field>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-header-title">
                                <p>
                                    <b-icon
                                        icon="security"
                                        size="is-small"
                                    ></b-icon>
                                    Security
                                </p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div>
                                <b-field horizontal label="Password">
                                    <b-field>
                                        <b-button
                                            @click="confirmResetPassword"
                                            type="is-primary"
                                            outlined
                                            :loading="this.loading.password"
                                            icon-left="send"
                                            >Send reset Password
                                            Notification</b-button
                                        >
                                    </b-field>
                                </b-field>
                                <hr />
                                <b-field horizontal label="Block">
                                    <b-field>
                                        <b-button
                                            @click="
                                                user.blocked
                                                    ? unblockUser()
                                                    : blockUser()
                                            "
                                            type="is-warning"
                                            :loading="this.loading.user"
                                            outlined
                                            >{{
                                                user.blocked
                                                    ? "Unblock"
                                                    : "Block"
                                            }}</b-button
                                        >
                                    </b-field>
                                </b-field>
                                <hr />
                                <b-field horizontal label="Delete">
                                    <b-field>
                                        <div class="buttons">
                                            <b-button
                                                v-if="user.trashed"
                                                @click="confirmRestore"
                                                type="is-info"
                                                outlined
                                                :loading="this.loading.user"
                                                >Restore</b-button
                                            >
                                            <b-button
                                                @click="confirmDelete"
                                                type="is-danger"
                                                outlined
                                                :loading="this.loading.user"
                                                >{{
                                                    user.trashed
                                                        ? "Destroy"
                                                        : "Delete"
                                                }}</b-button
                                            >
                                        </div>
                                    </b-field>
                                </b-field>
                            </div>
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
import Permission from "@b/models/Permission";
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
            permissions: [],
            loading: {
                user: false,
                roles: false,
                permissions: false,
                save: false,
                refresh: false,
                password: false,
                email_verification: false
            }
        };
    },
    computed: {},
    methods: {
        differenceById(item1, item2) {
            return differenceBy(item1, item2, "id");
        },
        async getRoles() {
            this.loading.roles = true;

            this.roles = await Role.$get().catch(err => {
                this.$buefy.toast.open({
                    message: `Error: ${err.message}`,
                    type: "is-danger",
                    queue: false
                });
            });
            this.loading.roles = false;
        },
        async getPermissions() {
            this.loading.permissions = true;

            this.permissions = await Permission.$get().catch(err => {
                this.$buefy.toast.open({
                    message: `Error: ${err.message}`,
                    type: "is-danger",
                    queue: false
                });
            });
            this.loading.permissions = false;
        },

        async getUser() {
            this.loading.refresh = true;

            this.user = await User.include("roles", "permissions")
                .$find(this.id)
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                });

            this.loading.refresh = false;
        },

        async saveUser() {
            this.loading.save = true;
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
            this.loading.save = false;
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
        sendResetPasswordNotification() {
            return;
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
        },
        confirmResetPassword() {
            this.$buefy.dialog.confirm({
                title: "Reset user password",
                message: `Are you sure you want to send a reset password notification?`,
                confirmText: "Send Notification",
                type: "is-info",
                hasIcon: true,
                onConfirm: () => this.sendResetPasswordNotification()
            });
        }
    },
    created() {
        this.getUser();
        this.getRoles();
        this.getPermissions();
    },
    mounted() {}
};
</script>
