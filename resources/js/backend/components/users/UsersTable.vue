<template>
    <div class="bb-table">
        <div class="bb-table-header">
            <div class="level-left">
                <div class="title">users</div>
                <div>
                    {{ pagination.from }}
                    <b-icon icon="chevron-right" size="is-small"></b-icon>
                    {{ pagination.to }}
                    :
                    {{ total }}
                </div>
                <div v-if="canFilter">
                    <b-field>
                        <p class="control">
                            <b-dropdown
                                v-model="filter.object"
                                aria-role="list"
                                v-on:change="filter.value = null"
                            >
                                <button class="button is-small" slot="trigger">
                                    <span>{{ filter.object.label }}</span>
                                    <b-icon
                                        icon="chevron-down"
                                        size="is-small"
                                    ></b-icon>
                                </button>

                                <b-dropdown-item
                                    v-for="filter in filters"
                                    :value="filter"
                                    :key="filter.field"
                                    >{{ filter.label }}</b-dropdown-item
                                >
                            </b-dropdown>
                        </p>
                        <template>
                            <b-select
                                v-if="filterType == 'select'"
                                placeholder="Select"
                                v-model="filter.value"
                                size="is-small"
                                v-on:input="onFilter"
                            >
                                <option
                                    v-for="option in filter.object.options"
                                    :value="option"
                                    :key="option"
                                >
                                    {{ option }}
                                </option>
                            </b-select>
                            <b-datepicker
                                v-else-if="filterType == 'date'"
                                placeholder="Select a Date"
                                icon="calendar"
                                trap-focus
                                size="is-small"
                                v-model="filter.value"
                                v-on:input="onFilter"
                                :max-date="filter.object.maxDate || null"
                                :min-date="filter.object.minDate || null"
                            >
                            </b-datepicker>
                            <b-input
                                v-else
                                icon="magnify"
                                type="search"
                                placeholder="Search..."
                                size="is-small"
                                v-model="filter.value"
                                v-on:input="onFilter"
                            ></b-input>
                        </template>
                        <b-button
                            size="is-small"
                            icon-left="close"
                            @click="clearFilter"
                            :disabled="!isFiltered"
                        ></b-button>
                    </b-field>
                </div>
                <div v-if="canSeeTrashed">
                    <b-field>
                        <b-radio-button
                            v-model="showTrashed"
                            :native-value="false"
                            type="is-primary"
                            size="is-small"
                            @input="refreshAndClear"
                        >
                            <span>All</span>
                        </b-radio-button>
                        <b-radio-button
                            v-model="showTrashed"
                            :native-value="true"
                            type="is-danger"
                            size="is-small"
                            @input="refreshAndClear"
                        >
                            <span>Trashed</span>
                        </b-radio-button>
                    </b-field>
                </div>
            </div>
            <div class="level-right">
                <div class="bb-buttons-group">
                    <div class="buttons has-addons are-small">
                        <b-tooltip label="Add" type="is-light" animated>
                            <b-button
                                class="is-primary"
                                icon-left="plus-circle-outline"
                                to="/users/new"
                                tag="router-link"
                            >
                            </b-button>
                        </b-tooltip>
                        <b-tooltip label="Refresh" type="is-light" animated>
                            <b-button
                                :loading="isLoading"
                                icon-left="refresh"
                                @click="refreshAndClear"
                            ></b-button>
                        </b-tooltip>
                    </div>
                    <div v-if="canSelect" class="buttons has-addons are-small">
                        <b-button class="" icon-left="checkbox-marked-outline">
                            {{ checkedLength }}
                        </b-button>
                        <b-tooltip
                            v-if="canDelete"
                            label="Delete"
                            type="is-light"
                            animated
                        >
                            <b-button
                                class="is-danger"
                                outlined
                                icon-left="delete-outline"
                                @click="confirmDelete"
                                :disabled="!isSelected"
                            >
                            </b-button>
                        </b-tooltip>
                        <b-tooltip
                            v-if="canBlock"
                            label="Block"
                            type="is-light"
                            animated
                        >
                            <b-button
                                class="is-warning"
                                outlined
                                icon-left="account-cancel-outline"
                                @click="confirmBlock"
                                :disabled="!isSelected"
                            >
                            </b-button>
                        </b-tooltip>
                    </div>

                    <div class="buttons are-small" v-if="canSelect">
                        <b-dropdown aria-role="list" position="is-bottom-left">
                            <button class="button is-default" slot="trigger">
                                <b-icon
                                    icon="dots-vertical"
                                    size="is-small"
                                ></b-icon>
                            </button>

                            <b-dropdown-item
                                v-if="canBlock && !showTrashed"
                                aria-role="listitem"
                                @click="confirmUnblock"
                                :disabled="!isSelected"
                                >Unblock</b-dropdown-item
                            >
                            <b-dropdown-item
                                v-if="canDelete"
                                aria-role="listitem"
                                @click="confirmRestore"
                                v-show="showTrashed"
                                :disabled="!isSelected"
                                >Restore</b-dropdown-item
                            >
                            <b-dropdown-item
                                v-show="!showTrashed"
                                aria-role="listitem"
                                @click="bulkSendEmailVerification"
                                :disabled="!isSelected"
                                >Send Email Verification</b-dropdown-item
                            >
                            <b-dropdown-item
                                v-if="canDestroy"
                                aria-role="listitem"
                                @click="confirmDestroy"
                                :disabled="!isSelected"
                                >Destroy</b-dropdown-item
                            >

                            <b-dropdown-item
                                aria-role="listitem"
                                @click="bulkExport"
                                >Export
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>
            </div>
        </div>
        <b-table
            :data="users"
            :loading="isLoading"
            :checkable="canSelect"
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
            default-sort-direction="desc"
            default-sort="id"
            scrollable
        >
            <template slot-scope="props">
                <b-table-column field="avatar" width="40">
                    <figure class="image avatar is-24x24">
                        <img class="is-rounded" :src="props.row.avatar" />
                    </figure>
                </b-table-column>
                <b-table-column
                    field="id"
                    label="ID"
                    numeric
                    sortable
                    width="40"
                >
                    {{ props.row.id }}
                </b-table-column>
                <b-table-column field="first_name" label="First Name" sortable>
                    {{ props.row.first_name }}
                </b-table-column>

                <b-table-column field="last_name" label="Last Name" sortable>
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
                            :key="role.id"
                            >{{ role.name }}</b-tag
                        >
                    </b-taglist>
                </b-table-column>

                <b-table-column
                    field="blocked_at"
                    label="Blocked"
                    sortable
                    centered
                >
                    <b-tooltip
                        type="is-light"
                        :label="
                            props.row.blocked_at
                                ? new Date(
                                      props.row.blocked_at
                                  ).toLocaleDateString()
                                : ''
                        "
                    >
                        <b-tag :type="props.row.blocked_at ? 'is-danger' : ''">
                            {{ props.row.blocked_at ? "yes" : "no" }}
                        </b-tag>
                    </b-tooltip>
                </b-table-column>

                <b-table-column
                    field="email_verified_at"
                    label="Verified"
                    sortable
                    centered
                >
                    <b-tooltip
                        type="is-light"
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
                                props.row.email_verified_at ? '' : 'is-danger'
                            "
                        >
                            {{ props.row.email_verified_at ? "yes" : "no" }}
                        </b-tag>
                    </b-tooltip>
                </b-table-column>

                <b-table-column field="created_at" label="Created At" sortable>
                    {{ new Date(props.row.created_at).toLocaleDateString() }}
                </b-table-column>

                <b-table-column
                    custom-key="actions"
                    label="Actions"
                    class="is-actions-cell"
                    width="40"
                    numeric
                >
                    <router-link
                        :to="{
                            name: 'users.edit',
                            params: { id: props.row.id }
                        }"
                        class="button is-small"
                    >
                        <b-icon icon="account-edit" size="is-small" />
                    </router-link>
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p class="title is-3">
                            🙌
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>

            <template slot="bottom-left">
                <div>
                    <div><b>Total checked</b>: {{ checkedLength }}</div>
                    <div><b>Total</b>: {{ total }}</div>
                </div>
            </template>
        </b-table>
    </div>
</template>

<script>
import { mapState } from "vuex";
import User from "@b/models/User";
import debounce from "lodash/debounce";

export default {
    name: "UsersTable",
    components: {},
    props: {
        canFilter: {
            type: Boolean
        },
        canSelect: {
            type: Boolean
        },
        canDelete: {
            type: Boolean
        },
        canDestroy: {
            type: Boolean
        },
        canBlock: {
            type: Boolean
        },
        canSeeTrashed: {
            type: Boolean
        }
    },
    data() {
        return {
            users: [],
            isLoading: false,
            showTrashed: false,

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
                field: "created_at",
                order: "-", // '-' or ''
                value: "-created_at"
            },
            filter: {
                object: {
                    type: "text",
                    field: false,
                    label: "Filters"
                },
                value: null
            },

            isPaginationSimple: false,
            paginationPosition: "bottom"
        };
    },
    computed: {
        ...mapState(["user", "roles", "permissions"]),
        total() {
            return this.pagination.total;
        },
        filterType() {
            return this.filter.object.type;
        },
        filters() {
            return [
                {
                    field: "id",
                    label: "ID",
                    type: "number"
                },
                {
                    field: "first_name",
                    type: "search",
                    label: "First Name"
                },
                {
                    field: "last_name",
                    type: "search",
                    label: "Last Name"
                },
                {
                    field: "email",
                    label: "Email",
                    type: "email"
                },
                {
                    field: "role",
                    label: "Role",
                    type: "select",
                    options: this.roles.map(role => role.name)
                },
                {
                    field: "permission",
                    label: "Permission",
                    type: "select",
                    options: this.permissions.map(permission => permission.name)
                },
                {
                    field: "created_after",
                    label: "Created After ",
                    type: "date",
                    maxDate: new Date()
                },
                {
                    field: "created_before",
                    label: "Created Before",
                    type: "date",
                    maxDate: new Date()
                }
            ];
        },
        isFiltered() {
            return !!this.filter.object.field;
        },
        checkedLength() {
            return this.checkedRows.length;
        },
        isSelected() {
            return this.checkedRows.length > 0;
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
        onFilter: debounce(function() {
            if (!this.isFiltered) {
                return;
            }
            this.checkedRows = [];
            this.getUsers();
        }, 500),
        //table actions
        async getUsers() {
            this.isLoading = true;

            let user = User.orderBy(this.sort.value)
                .page(this.pagination.current_page)
                .include("roles");
            if (this.isFiltered) {
                if (this.filter.value instanceof Date) {
                    user.where(
                        this.filter.object.field,
                        moment(this.filter.value).format("YYYY-MM-DD")
                    );
                } else {
                    user.where(this.filter.object.field, this.filter.value);
                }
            }
            if (this.showTrashed) {
                user.where("trashed", "only");
            }
            let response = await user.get().then(response => {
                this.users = response.data;
                this.pagination = response.meta;
            });

            this.isLoading = false;
        },
        refresh() {
            this.getUsers();
        },
        refreshAndClear() {
            this.checkedRows = [];
            this.refresh();
        },
        clearFilter() {
            (this.filter.value = null), this.refresh();
        },
        //confirm actions
        confirmDelete() {
            this.$buefy.dialog.confirm({
                title: "Deleting users",
                message: `Are you sure you want to <b>delete</b> ${this.checkedLength} users? This action can be undone.`,
                confirmText: "Delete Users",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.bulkDelete()
            });
        },
        confirmDestroy() {
            this.$buefy.dialog.confirm({
                title: "Destroying users",
                message: `Are you sure you want to <b>destroy</b> ${this.checkedLength} users? This action can NOT be undone.`,
                confirmText: "Destroy Users",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.bulkDestroy()
            });
        },
        confirmBlock() {
            this.$buefy.dialog.confirm({
                title: "Blocking users",
                message: `Are you sure you want to <b>block</b> ${this.checkedLength} users? This action can be undone.`,
                confirmText: "Block Users",
                type: "is-warning",
                hasIcon: true,
                onConfirm: () => this.bulkBlock()
            });
        },
        confirmUnblock() {
            this.$buefy.dialog.confirm({
                title: "Unblocking users",
                message: `Are you sure you want to <b>unblock</b> ${this.checkedLength} users? This action can be undone.`,
                confirmText: "Unblock Users",
                type: "is-warning",
                hasIcon: true,
                onConfirm: () => this.bulkUnblock()
            });
        },
        confirmRestore() {
            this.$buefy.dialog.confirm({
                title: "Restoring users",
                message: `Are you sure you want to <b>restore</b> ${this.checkedLength} users? This action can be undone.`,
                confirmText: "Restore Users",
                type: "is-warning",
                hasIcon: true,
                onConfirm: () => this.bulkRestore()
            });
        },
        // bulk actions
        bulkDelete() {
            this.checkedRows.forEach(user => {
                this.delete(user);
            });
            this.refreshAndClear();
            return true;
        },
        bulkDestroy() {
            this.checkedRows.forEach(user => {
                this.destroy(user);
            });
            this.refreshAndClear();
            return true;
        },
        bulkBlock() {
            this.checkedRows.forEach(user => {
                this.block(user);
            });

            return true;
        },
        bulkUnblock() {
            this.checkedRows.forEach(user => {
                this.unblock(user);
            });

            return true;
        },
        bulkRestore() {
            this.checkedRows.forEach(user => {
                this.restore(user);
            });
            this.refreshAndClear();
            return true;
        },
        bulkSendEmailVerification() {
            this.checkedRows.forEach(user => {
                this.sendEmailVerification(user);
            });

            return true;
        },
        bulkExport() {
            let users = new User().custom("users/export");
            if (this.checkedLength > 0) {
                let usersId = this.checkedRows.map(item => {
                    return item.id;
                });
                users.whereIn("id", usersId);
            }
            if (this.showTrashed) {
                users.where("trashed", "only");
            }
            users.export(this.showTrashed);
            this.$buefy.snackbar.open({
                duration: 3000,
                message: `${
                    this.checkedLength > 0 ? this.checkedLength : "all"
                } users have been exported`,
                type: "is-danger",
                position: "is-bottom-right",
                queue: true
            });
        },
        //single actions
        async delete(user) {
            await user.delete().then(response => {
                this.$buefy.snackbar.open({
                    duration: 3000,
                    message: `${user.fullname} has been deleted`,
                    type: "is-danger",
                    position: "is-bottom-right",
                    actionText: "Undo",
                    queue: true,
                    onAction: () => {
                        this.restore(user);
                    }
                });
            });
        },
        async destroy(user) {
            await user.destroy().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `${user.fullname} has been destroyed`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
            });
        },
        async block(user) {
            await user
                .block()
                .save()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${user.fullname} has been blocked`,
                        type: "is-danger",
                        position: "is-bottom-right",
                        actionText: "Undo",
                        queue: true,
                        onAction: () => {
                            this.unblock(user);
                        }
                    });
                });
        },
        async unblock(user) {
            await user
                .unblock()
                .save()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${user.fullname} has been unblocked`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: true
                    });
                });
        },
        async restore(user) {
            await user.restore().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `${user.fullname} has been restored`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: true
                });
            });
        },
        async sendEmailVerification(user) {
            await user.sendEmailVerification().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `An email has been send to <b>${user.fullname}</b>`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: true
                });
            });
        }
    },
    created() {
        this.getUsers();
    },
    mounted() {}
};
</script>
