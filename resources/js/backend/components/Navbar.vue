<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
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
            <b-navbar-item tag="div">
                <a class="button is-light" href="/logout">
                    <b-icon icon="account-arrow-right"> </b-icon>
                </a>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
// @b/ is an alias to /src/backend

export default {
    name: "NavBar",
    components: {},
    data() {
        return {
            menu: []
        };
    },
    computed: {},
    created() {}
};
</script>
