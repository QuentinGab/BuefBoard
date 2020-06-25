<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="/images/LOGO.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                />
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="div" class="p-0">
                <b-input placeholder="Search..." type="search" icon="magnify">
                </b-input>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-dropdown
                position="is-bottom-left"
                append-to-body
                aria-role="menu"
                class="bb-navbar-account"
            >
                <a class="navbar-item" slot="trigger" role="button">
                    <div class="navbar-picture">
                        <b-icon icon="account-circle"></b-icon>
                    </div>
                    <div>
                        <span class="h6">
                            {{ user.fullname }}
                        </span>
                    </div>
                    <div class="navbar-icon">
                        <b-icon icon="chevron-down"></b-icon>
                    </div>
                </a>
                <b-dropdown-item custom aria-role="menuitem">
                    <b-taglist>
                        <b-tag 
                        v-for="role in user.roles"
                        :key="role.id"
                        type="is-primary"
                        >
                            {{ role.name }}
                        </b-tag>
                    </b-taglist>
                </b-dropdown-item>
                <hr class="dropdown-divider" />
                <b-dropdown-item has-link aria-role="menuitem">
                    <router-link :to="{ name: 'dashboard' }">
                        <b-icon icon="desktop-mac" size="is-small"></b-icon>
                        DashBoard
                    </router-link>
                </b-dropdown-item>
                <b-dropdown-item has-link aria-role="menuitem">
                    <a href="/logout">
                        <b-icon icon="logout" size="is-small"></b-icon>
                        Logout
                    </a>
                </b-dropdown-item>
            </b-dropdown>
        </template>
    </b-navbar>
</template>

<script>
// @b/ is an alias to /src/backend
import { mapState } from "vuex";

export default {
    name: "NavBar",
    components: {},
    data() {
        return {
            menu: []
        };
    },
    computed: {
        ...mapState(["user", "loading"])
    },
    created() {}
};
</script>
