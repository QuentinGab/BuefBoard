<template>
    <section>
        <title-bar
            class="p-1"
            title="Manage Users"
            :menu="[{ name: 'users', to: '/users/index' }]"
        ></title-bar>
        <div class="bb-table p-1">
            <div class="level">
                <div class="level-left">
                    <b-button
                        class="is-primary is-rounded"
                        icon-left="plus-circle-outline"
                        to="/users/new"
                        tag="router-link"
                    >
                    </b-button>
                </div>
                <div class="level-right">
                    <div class="buttons has-addons">
                        <b-button
                            class="is-danger"
                            icon-left="delete"
                            @click="confirmDelete"
                            :disabled="checkedRows.length > 0 ? false : true"
                        >
                            {{ checkedRows.length }}
                        </b-button>
                        <b-button
                            icon-left="refresh"
                            @click="refresh"
                        ></b-button>
                        <b-button icon-left="dots-vertical"></b-button>
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
                                {{ props.row.email_verified_at ? "yes" : "no" }}
                            </b-tag>
                        </b-tooltip>
                    </b-table-column>

                    <b-table-column
                        field="updated_at"
                        label="Updated At"
                        sortable
                    >
                        {{
                            new Date(props.row.updated_at).toLocaleDateString()
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
                        <div class="content has-text-grey has-text-centered">
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
            data: [],
            users: [],
            isLoading: false,

            checkedRows: [],
            //paginate
            pagination: {
                total: 0,
                count: 0,
                per_page: 0,
                current_page: 1,
                total_pages: 1,
                links: {
                    previous: "",
                    next: ""
                }
            },
            sort: {
                field: "id",
                order: "", // '-' or ''
                sort: "id"
            },

            isPaginationSimple: false,
            paginationPosition: "bottom"
        };
    },
    computed: {
        ...mapState(["api"]),
        total() {
            return this.pagination.total;
        }
    },
    methods: {
        getData(page) {
            this.isLoading = true;
            axios
                .get(this.api.users + `?page=${page}`)
                .then(r => {
                    this.data = r.data.data;
                    this.pagination = r.data.meta.pagination;
                    this.isLoading = false;
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                    this.isLoading = false;
                });
        },
        onPageChange(page) {
            this.pagination.current_page = page;
            this.getData(page);
            this.getUsers();
        },
        onSort(field, order) {
            this.sort.field = field;
            this.sort.order = order == "desc" ? "-" : "";
            this.sort.sort = `${this.sort.order}${this.sort.field}`;
            this.getUsers();
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

            let response = await User.orderBy(this.sort.sort)
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
            this.pagination = response.meta.pagination;

            this.isLoading = false;
        }
    },
    mounted() {
        this.getUsers();
    },
    created() {}
};
</script>
