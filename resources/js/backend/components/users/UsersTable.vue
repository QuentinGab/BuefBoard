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
                            <b-dropdown v-model="filter.field" aria-role="list">
                                <button class="button is-small" slot="trigger">
                                    <span>{{
                                        filter.field ? filter.field : "Filters"
                                    }}</span>
                                    <b-icon
                                        icon="chevron-down"
                                        size="is-small"
                                    ></b-icon>
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
                            :placeholder="
                                filter.field ? 'Search...' : 'Select a column'
                            "
                            size="is-small"
                            v-model="filter.value"
                            v-on:input="onFilter"
                        ></b-input>
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
                <b-table-column field="id" label="ID" numeric sortable>
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
                    <div><b>Total checked</b>: {{ checkedLength }}</div>
                    <div><b>Total</b>: {{ total }}</div>
                </div>
            </template>
        </b-table>
    </div>
</template>

<script>
import User from "@b/models/User";

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
        onFilter() {
            if (!this.filter.field) {
                return;
            }
            this.checkedRows = [];
            setTimeout(this.getUsers, 500);
        },
        //table actions
        async getUsers() {
            this.isLoading = true;

            let user = User.orderBy(this.sort.value)
                .page(this.pagination.current_page)
                .include("roles");
            if (this.isFiltered) {
                user.where(this.filter.field, this.filter.value);
            }
            if (this.showTrashed) {
                user.where("trashed", "only");
            }
            let response = await user
                .get()
                .then(response => {
                    this.users = response.data;
                    this.pagination = response.meta;
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
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
            await user
                .delete()
                .then(response => {
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
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                });
        },
        async destroy(user) {
            await user
                .destroy()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${user.fullname} has been destroyed`,
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
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
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
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                });
        },
        async restore(user) {
            await user
                .restore()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${user.fullname} has been restored`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: true
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
        async sendEmailVerification(user) {
            await user
                .sendEmailVerification()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `An email has been send to <b>${user.fullname}</b>`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: true
                    });
                })
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
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

<style></style>