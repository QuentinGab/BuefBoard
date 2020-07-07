<template>
    <section>
        <title-bar
            class="p-1"
            title="Manage Roles"
            :menu="[{ name: 'roles', to: '/roles/index' }]"
        ></title-bar>
        <div class="columns is-marginless is-multiline">
            <div class="column is-12" v-for="role in roles" :key="role.id">
                <div class="card">
                    <div class="card-header">
                        <div class="card-header-title level">
                                <h6 class="title">
                                    {{ role.name }}
                                    <b-tag rounded>{{
                                        role.users_count
                                    }}</b-tag>
                                </h6>                            
                        </div>
                    </div>
                    <div class="card-content">
                        <b-loading
                            :is-full-page="false"
                            :active.sync="loading.permissions"
                        ></b-loading>
                        <div v-if="role.name == 'god'">
                            <p>A god can do everthing</p>
                        </div>
                        <div
                            v-else
                            class="field is-grouped is-grouped-multiline"
                        >
                            <b-checkbox-button
                                v-for="permission in role.permissions"
                                :key="permission.id"
                                v-model="role.permissions"
                                :native-value="permission"
                                type="is-light"
                                @input="onChange(role)"
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
                                @input="onChange(role)"
                            >
                                <span>{{ permission.name }}</span>
                            </b-checkbox-button>
                        </div>
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
import debounce from "lodash/debounce";

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
        onChange: debounce(function(role) {
            this.saveRole(role);
        }, 300),
        differencePermissions(p1, p2) {
            return differenceBy(p1, p2, "id");
        },
        async saveRole(role) {
            await role.save().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `${role.name} has been updated`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
            });
        },
        async getRoles() {
            this.loading.roles = true;

            this.roles = await Role.include("permissions").$get();

            this.loading.roles = false;
        },
        async getPermissions() {
            this.loading.permissions = true;

            let response = await Permission.get().then(response => {
                this.permissions = response.data;
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
