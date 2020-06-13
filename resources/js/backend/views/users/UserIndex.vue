<template>
    <section>
        <title-bar
            class="p-1"
            title="Manage Users"
            :menu="[{ name: 'users', to: '/users/index' }]"
        ></title-bar>
        <div class="p-1">
            <div class="bb-table">
                <div class="bb-table-header">
                    <div class="level-left">
                        <div class="title">users</div>
                        <div>
                            {{ pagination.from }}
                            <b-icon
                                icon="chevron-right"
                                size="is-small"
                            ></b-icon>
                            {{ pagination.to }}
                            :
                            {{ total }}
                        </div>
                        <div>
                            <b-field>
                                <p class="control">
                                    <b-dropdown
                                        v-model="filter.field"
                                        aria-role="list"
                                    >
                                        <button
                                            class="button is-small"
                                            slot="trigger"
                                        >
                                            <span>{{
                                                filter.field
                                                    ? filter.field
                                                    : "Filters"
                                            }}</span>
                                            <b-icon icon="menu-down"></b-icon>
                                        </button>

                                        <b-dropdown-item
                                            :value="field"
                                            v-for="field in fields"
                                            :key="field"
                                            >{{ field }}</b-dropdown-item
                                        >
                                    </b-dropdown>
                                </p>
                                <b-input
                                    icon="magnify"
                                    type="search"
                                    placeholder="Search..."
                                    size="is-small"
                                    v-model="filter.value"
                                    v-on:input="onFilter"
                                ></b-input>
                            </b-field>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="bb-buttons-group">
                            <div class="buttons has-addons are-small">
                                <b-button
                                    class="is-primary"
                                    icon-left="plus-circle-outline"
                                    to="/users/new"
                                    tag="router-link"
                                >
                                </b-button>

                                <b-button
                                    icon-left="refresh"
                                    @click="refresh"
                                ></b-button>
                            </div>
                            <div class="buttons has-addons are-small">
                                <b-button
                                    class=""
                                    icon-left="checkbox-marked-outline"
                                >
                                    {{ checkedRows.length }}
                                </b-button>
                                <b-button
                                    class="is-danger"
                                    icon-left="delete"
                                    @click="confirmDelete"
                                    :disabled="
                                        checkedRows.length > 0 ? false : true
                                    "
                                >
                                </b-button>
                            </div>
                            <div class="buttons has-addons are-small">
                                <b-button icon-left="dots-vertical"></b-button>
                            </div>
                        </div>
                    </div>
                </div>
                <b-table
                    :data="users"
                    :loading="isLoading"
                    checkable
                    :checked-rows.sync="checkedRows"
                    paginated
                    backend-pagination
                    @page-change="onPageChange"
                    :total="total"
                    :per-page="pagination.per_page"
                    :current-page.sync="pagination.current_page"
                    :pagination-simple="isPaginationSimple"
                    :pagination-position="paginationPosition"
                    pagination-size="is-small"
                    backend-sorting
                    @sort="onSort"
                    default-sort-direction="asc"
                    default-sort="id"
                    aria-next-label="Next page"
                    aria-previous-label="Previous page"
                    aria-page-label="Page"
                    aria-current-label="Current page"
                >
                    <template slot-scope="props">
                        <b-table-column
                            field="id"
                            label="ID"
                            width="40"
                            numeric
                            sortable
                        >
                            {{ props.row.id }}
                        </b-table-column>
                        <b-table-column
                            field="first_name"
                            label="First Name"
                            sortable
                        >
                            {{ props.row.first_name }}
                        </b-table-column>

                        <b-table-column
                            field="last_name"
                            label="Last Name"
                            sortable
                        >
                            {{ props.row.last_name }}
                        </b-table-column>

                        <b-table-column field="email" label="Email" sortable>
                            {{ props.row.email }}
                        </b-table-column>

                        <b-table-column field="roles" label="Roles">
                            <b-taglist>
                                <b-tag
                                    type="is-info"
                                    v-for="role in props.row.roles"
                                    :key="role"
                                    >{{ role }}</b-tag
                                >
                            </b-taglist>
                        </b-table-column>
                        <!-- <b-table-column field="permissions" label="Permissions">
                        <b-taglist>
                            <b-tag
                                type="is-info"
                                v-for="permission in props.row.permissions"
                                :key="permission"
                                >{{ permission }}</b-tag
                            >
                        </b-taglist>
                    </b-table-column> -->

                        <b-table-column
                            field="email_verified_at"
                            label="Verified at"
                            sortable
                            centered
                        >
                            <b-tooltip
                                :label="
                                    props.row.email_verified_at
                                        ? new Date(
                                              props.row.email_verified_at
                                          ).toLocaleDateString()
                                        : ''
                                "
                            >
                                <b-tag
                                    :type="
                                        props.row.email_verified_at
                                            ? ''
                                            : 'is-danger'
                                    "
                                >
                                    {{
                                        props.row.email_verified_at
                                            ? "yes"
                                            : "no"
                                    }}
                                </b-tag>
                            </b-tooltip>
                        </b-table-column>

                        <b-table-column
                            field="updated_at"
                            label="Updated At"
                            sortable
                        >
                            {{
                                new Date(
                                    props.row.updated_at
                                ).toLocaleDateString()
                            }}
                        </b-table-column>

                        <b-table-column
                            custom-key="actions"
                            label="Actions"
                            class="is-actions-cell"
                            width="40"
                        >
                            <router-link
                                :to="{
                                    name: 'users.edit',
                                    params: { id: props.row.id }
                                }"
                                class="button is-rounded is-small is-primary"
                            >
                                <b-icon icon="account-edit" size="is-small" />
                            </router-link>
                        </b-table-column>
                    </template>

                    <template slot="empty">
                        <section class="section">
                            <div
                                class="content has-text-grey has-text-centered"
                            >
                                <p>
                                    <b-icon icon="emoticon-sad" size="is-large">
                                    </b-icon>
                                </p>
                                <p>Nothing here.</p>
                            </div>
                        </section>
                    </template>

                    <template slot="bottom-left">
                        <div>
                            <div>
                                <b>Total checked</b>: {{ checkedRows.length }}
                            </div>
                            <div><b>Total</b>: {{ total }}</div>
                        </div>
                    </template>
                </b-table>
            </div>
        </div>
    </section>
</template>

<script>
import TitleBar from "@b/components/TitleBar";
import { mapState } from "vuex";

import User from "@b/models/User";

export default {
    name: "UserIndex",
    components: { TitleBar },
    data() {
        return {
            users: [],
            isLoading: false,

            checkedRows: [],
            //paginate
            pagination: {
                current_page: 1,
                from: 0,
                last_page: 1,
                path: "",
                per_page: 0,
                to: 0,
                total: 0
            },
            sort: {
                field: "id",
                order: "", // '-' or ''
                value: "id"
            },
            filter: {
                field: null,
                value: null
            },

            isPaginationSimple: false,
            paginationPosition: "bottom"
        };
    },
    computed: {
        ...mapState(["api"]),
        total() {
            return this.pagination.total;
        },
        fields() {
            if (this.users && this.users.length > 0) {
                return Object.keys(this.users[0]);
            }
            return [];
        },
        isFiltered() {
            return !!(this.filter.field && this.filter.value);
        }
    },
    methods: {
        onPageChange(page) {
            this.pagination.current_page = page;
            this.getUsers();
        },
        onSort(field, order) {
            this.sort.field = field;
            this.sort.order = order == "desc" ? "-" : "";
            this.sort.value = `${this.sort.order}${this.sort.field}`;
            this.getUsers();
        },
        onFilter() {
            if (!this.filter.field) {
                return;
            }
            this.checkedRows = [];
            setTimeout(this.getUsers, 500);
        },
        refresh() {
            this.checkedRows = [];
            this.getUsers();
        },
        confirmDelete() {
            this.$buefy.dialog.confirm({
                title: "Deleting users",
                message:
                    "Are you sure you want to <b>delete</b> your account? This action cannot be undone.",
                confirmText: "Delete Users",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.bulkDelete()
            });
        },
        bulkDelete() {
            this.$buefy.snackbar.open({
                duration: 5000,
                message: "users have been deleted",
                type: "is-danger",
                position: "is-bottom-right",
                actionText: "Undo",
                queue: false,
                onAction: () => {
                    this.$buefy.toast.open({
                        message: "Action pressed",
                        queue: false
                    });
                }
            });
            return true;
        },
        async getUsers() {
            this.isLoading = true;

            if (this.isFiltered) {
                let response = await User.orderBy(this.sort.value)
                    .where(this.filter.field, this.filter.value)
                    .page(this.pagination.current_page)
                    .get()
                    .catch(err => {
                        this.$buefy.toast.open({
                            message: `Error: ${err.message}`,
                            type: "is-danger",
                            queue: false
                        });
                    });
                this.users = response.data;
                this.pagination = response.meta;
            } else {
                let response = await User.orderBy(this.sort.value)
                    .page(this.pagination.current_page)
                    .get()
                    .catch(err => {
                        this.$buefy.toast.open({
                            message: `Error: ${err.message}`,
                            type: "is-danger",
                            queue: false
                        });
                    });
                this.users = response.data;
                this.pagination = response.meta;
            }

            this.isLoading = false;
        }
    },
    mounted() {
        this.getUsers();
    },
    created() {}
};
</script>
