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
                            @click="getData"
                        ></b-button>
                        <b-button icon-left="dots-vertical"></b-button>
                    </div>
                </div>
            </div>
            <b-table
                :data="data"
                :loading="isLoading"
                checkable
                :checked-rows.sync="checkedRows"
                :paginated="isPaginated"
                :per-page="perPage"
                :current-page.sync="currentPage"
                :pagination-simple="isPaginationSimple"
                :pagination-position="paginationPosition"
                pagination-size="is-small"
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
                    <b-table-column field="date" label="Date" sortable>
                        {{ props.row.date }}
                    </b-table-column>
                    <b-table-column field="gender" label="Gender" sortable>
                        {{ props.row.gender }}
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
                        <div><b>Total row</b>: {{ total }}</div>
                    </div>
                </template>
            </b-table>
        </div>
    </section>
</template>

<script>
import TitleBar from "@b/components/TitleBar";
import { mapState } from "vuex";

export default {
    name: "UserIndex",
    components: { TitleBar },
    data() {
        return {
            data: [],
            isLoading: false,

            checkedRows: [],
            //paginate
            isPaginated: true,
            isPaginationSimple: false,
            paginationPosition: "bottom",
            currentPage: 1,
            perPage: 10,
            //sort
            defaultSortDirection: "asc",
            sortIcon: "arrow-up",
            sortIconSize: "is-small"
        };
    },
    computed: {
        ...mapState(["api"]),

        total() {
            return this.data.length;
        }
    },
    methods: {
        getData() {
            this.isLoading = true;
            axios
                .get(this.api.users)
                .then(r => {
                    this.data = r.data;
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
        }
    },
    mounted() {
        console.log("Component mounted.");
        this.getData();
    },
    created() {}
};
</script>
