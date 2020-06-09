<template>
    <section class="p-1">
        <div class="level">
            <div class="level-left">
                <h1 class="title">Manage Users</h1>
            </div>
            <div class="level-right">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <router-link to="/users/index">Users</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="bb-table">
            <div class="level">
                <div class="level-left">
                    <b-button
                        class="is-primary"
                        icon-left="plus-circle-outline"
                        to="/users/new"
                        tag="router-link"
                    >
                        Add
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
                        <b-button icon-left="dots-vertical"></b-button>
                    </div>
                </div>
            </div>
            <b-table
                :data="data"
                :paginated="isPaginated"
                :per-page="perPage"
                :current-page.sync="currentPage"
                :pagination-simple="isPaginationSimple"
                :pagination-position="paginationPosition"
                default-sort-direction="asc"
                default-sort="id"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page"
                :columns="columns"
                :checked-rows.sync="checkedRows"
                checkable
            >
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
export default {
    name: "UserIndex",
    components: {},
    data() {
        const data = [
            {
                id: 1,
                first_name: "Jesse",
                last_name: "Simmons",
                date: "2016-10-15 13:43:27",
                gender: "Male"
            },
            {
                id: 2,
                first_name: "John",
                last_name: "Jacobs",
                date: "2016-12-15 06:00:53",
                gender: "Male"
            },
            {
                id: 3,
                first_name: "Tina",
                last_name: "Gilbert",
                date: "2016-04-26 06:26:28",
                gender: "Female"
            },
            {
                id: 4,
                first_name: "Clarence",
                last_name: "Flores",
                date: "2016-04-10 10:28:46",
                gender: "Male"
            },
            {
                id: 5,
                first_name: "Anne",
                last_name: "Lee",
                date: "2016-12-06 14:38:38",
                gender: "Female"
            }
        ];

        return {
            data,

            checkedRows: [],
            columns: [
                {
                    field: "id",
                    label: "ID",
                    width: "40",
                    numeric: true,
                    sortable: true
                },
                {
                    field: "first_name",
                    label: "First Name",
                    sortable: true
                },
                {
                    field: "last_name",
                    label: "Last Name"
                },
                {
                    field: "date",
                    label: "Date"
                },
                {
                    field: "gender",
                    label: "Gender"
                }
            ],
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
        total() {
            return this.data.length;
        }
    },
    methods: {
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
    },
    created() {}
};
</script>
