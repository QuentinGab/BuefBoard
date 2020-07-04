<template>
    <section>
        <title-bar
            class="p-1"
            title="My Account"
            :menu="[{ name: 'dashboard', to: { name: 'dashboard' } }]"
        ></title-bar>

        <div class="">
            <div class="columns is-marginless is-multiline">
                <div class="column is-12 is-6-fullhd">
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
                                <hr />
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
                                            exists && !user.email_verified
                                                ? 'is-warning'
                                                : null
                                        "
                                        :message="
                                            user.email_verified
                                                ? 'Your email is verified'
                                                : 'Your email is not verified'
                                        "
                                    >
                                        <b-input
                                            id="email"
                                            type="email"
                                            v-model="user.email"
                                        ></b-input>
                                    </b-field>
                                </b-field>

                                <hr />
                                <b-field horizontal label="Roles">
                                    <b-skeleton
                                        height="36px"
                                        :active="loading.roles"
                                    ></b-skeleton>
                                    <div class="buttons">
                                        <b-button
                                            v-for="role in user.roles"
                                            :key="role.id"
                                            type="is-primary"
                                        >
                                            {{ role.name }}
                                        </b-button>
                                    </div>
                                </b-field>
                                <hr />
                                <template
                                    v-if="
                                        user.permissions &&
                                            user.permissions.length > 0
                                    "
                                >
                                    <b-field horizontal label="Permissions">
                                        <div class="buttons">
                                            <b-button
                                                v-for="permission in user.permissions"
                                                :key="permission.id"
                                                type="is-primary"
                                            >
                                                {{ permission.name }}
                                            </b-button>
                                        </div>
                                    </b-field>
                                    <hr />
                                </template>

                                <b-field horizontal label="">
                                    <b-field>
                                        <p class="control has-text-right">
                                            <b-button
                                                @click="saveUser"
                                                type="is-primary"
                                                :loading="this.loading.save"
                                            >
                                                Save
                                            </b-button>
                                            <b-button
                                                v-if="exists"
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
                            <b-field horizontal label="Change password">
                                <b-field
                                    label="New Password"
                                    label-for="password"
                                    expand
                                >
                                    <b-input
                                        id="password"
                                        type="password"
                                        v-model="password"
                                    ></b-input>
                                </b-field>
                                <b-field
                                    label="Confirm Password"
                                    label-for="password_confirmation"
                                    expand
                                    :type="
                                        !passwordConfirmed ? 'is-danger' : null
                                    "
                                    :message="
                                        !passwordConfirmed
                                            ? 'The passwords does not match'
                                            : null
                                    "
                                >
                                    <b-input
                                        id="password_confirmation"
                                        type="password"
                                        v-model="password_confirmation"
                                    ></b-input>
                                </b-field>
                            </b-field>
                            <b-field horizontal label="">
                                <b-field>
                                    <p class="control has-text-right">
                                        <b-button
                                            @click="changePassword"
                                            type="is-primary"
                                            :loading="this.loading.password"
                                            :disabled="!this.passwordValidated"
                                        >
                                            Change password
                                        </b-button>
                                    </p>
                                </b-field>
                            </b-field>
                            <hr />
                            <b-field horizontal label="Delete">
                                <b-field>
                                    <div class="buttons">
                                        <b-button
                                            @click="confirmDestroy"
                                            type="is-danger"
                                            outlined
                                            :loading="this.loading.user"
                                        >
                                            Delete my account
                                        </b-button>
                                    </div>
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
import CurrentUser from "@b/models/CurrentUser";

import { mapState } from "vuex";

export default {
    name: "UserForm",
    components: { TitleBar },
    data() {
        return {
            roles: [],
            permissions: [],
            password: null,
            password_confirmation: null,
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
    computed: {
        ...mapState(["user"]),
        id() {
            return this.user.id;
        },
        exists() {
            return !!this.id;
        },
        passwordConfirmed() {
            return this.password === this.password_confirmation;
        },
        passwordValidated(){
            if (this.password == null || this.password == "") {
                return false;
            }
            return this.passwordConfirmed;
        }
    },
    methods: {
        async getUser() {
            this.loading.refresh = true;
            this.$store.commit("updateLoadingUser", true);
            let user = await CurrentUser.include("roles", "permissions").$find(
                "current"
            );

            this.$store.commit("updateUser", user);
            this.$store.commit("updateLoadingUser", false);

            this.loading.refresh = false;
        },
        async saveUser() {
            this.loading.save = true;
            await this.user.save().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `Your account has been updated`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
            });

            this.loading.save = false;
        },
        async changePassword() {
            this.loading.password = true;

            axios
                .put(`${this.user.endpoint()}/password`, {
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                .then(r => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `Your password has been changed`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: false
                    });
                });

            this.loading.password = false;
        },
        async deleteUser() {
            this.loading.user = true;
            await this.user.delete().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `${this.user.fullname} has been trashed`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
            });

            this.loading.user = false;
            this.getUser();
        },

        confirmDestroy() {
            this.$buefy.dialog.confirm({
                title: "Destroying your account",
                message: `Are you sure you want to <b>destroy</b> your account? This action can NOT be undone.`,
                confirmText: "Destroy me",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.deleteUser()
            });
        }
    },
    created() {},
    mounted() {}
};
</script>
