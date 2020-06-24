<template>
    <section>
        <title-bar
            class="p-1"
            title="Manage Roles"
            :menu="[{ name: 'roles', to: '/roles/index' }]"
        ></title-bar>
        <div class="p-1">
            <div class="bb-box" v-for="role in roles" :key="role.id">
                <div class="box-header">
                    <div class="level-left">
                        <h6 class="title">
                            {{ role.name }}
                            <b-tag rounded>{{ role.users_count }}</b-tag>
                        </h6>
                    </div>
                    <div class="level-right">
                        <div>
                            <b-button
                                v-if="role.name !== 'god'"
                                @click="saveRole(role)"
                                icon-left="content-save-outline"
                                type="is-primary"
                                size="is-small"
                                >save</b-button
                            >
                        </div>
                    </div>
                </div>
                <div class="box-content">
                    <b-loading
                        :is-full-page="false"
                        :active.sync="loading.permissions"
                    ></b-loading>
                    <div v-if="role.name == 'god'">
                        <p>The god can do everthing</p>
                    </div>
                    <div v-else class="field is-grouped is-grouped-multiline">
                        <b-checkbox-button
                            v-for="permission in role.permissions"
                            :key="permission.id"
                            v-model="role.permissions"
                            :native-value="permission"
                            type="is-light"
                        >
                            <span>{{ permission.name }}</span>
                        </b-checkbox-button>

                        <b-checkbox-button
                            v-for="permission in differencePermissions(
                                permissions,
                                role.permissions
                            )"
                            :key="permission.id"
                            v-model="role.permissions"
                            :native-value="permission"
                            type="is-primary"
                        >
                            <span>{{ permission.name }}</span>
                        </b-checkbox-button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TitleBar from "@b/components/TitleBar";

import Role from "@b/models/Role";
import Permission from "@b/models/Permission";

import differenceBy from "lodash/differenceBy";

export default {
    name: "RoleIndex",
    components: { TitleBar },
    data() {
        return {
            roles: [],
            permissions: [],
            loading: {
                roles: false,
                permissions: false
            },
            checkboxGroup: []
        };
    },
    computed: {},
    methods: {
        differencePermissions(p1, p2) {
            return differenceBy(p1, p2, "id");
        },
        async saveRole(role) {
            await role
                .save()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${role.name} has been updated`,
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
        async getRoles() {
            this.loading.roles = true;

            let response = await Role.include("permissions")
                .get()
                .then(response => {
                    this.roles = response.data;
                })
                .catch(err => {
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

            let response = await Permission.get()
                .then(response => {
                    this.permissions = response.data;
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                });
            this.loading.permissions = false;
        }
    },
    created() {
        this.getRoles();
        this.getPermissions();
    },
    mounted() {}
};
</script>

<style></style>
