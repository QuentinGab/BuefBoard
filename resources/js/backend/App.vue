<template>
    <div id="app">
        <nav-bar class="bb-navbar" />
        <div class="is-flex bb-content">
            <aside-menu :menu="menu" class="bb-sidebar" />
            <div class="bb-view">
                <transition name="slideIn">
                    <router-view />
                </transition>
            </div>
        </div>
        <notification-center class="bb-notification-center" />
    </div>
</template>

<script>
// @b/ is an alias to /src/backend
import { mapState } from "vuex";

import AsideMenu from "@b/components/AsideMenu";
import NotificationCenter from "@b/components/NotificationCenter";
import NavBar from "@b/components/NavBar";

import CurrentUser from "@b/models/CurrentUser";

export default {
    name: "App",
    components: { AsideMenu, NavBar, NotificationCenter },
    data() {
        return {
            menu: [
                {
                    label: "Général",
                    icon: "cog",
                    menu: [
                        {
                            label: "Dashboard",
                            icon: "desktop-mac",
                            to: "/"
                        },
                        {
                            label: "Users",
                            icon: "account-multiple-outline",
                            to: "/users/index"
                        },
                        {
                            label: "Roles",
                            icon: "account-details-outline",
                            to: "/roles/index"
                        },
                        {
                            label: "Activity",
                            icon: "radar",
                            to: "/activities/index"
                        }
                    ]
                },
                {
                    label: "You",
                    menu: [
                        {
                            label: "My Account",
                            icon: "account-circle-outline",
                            to: "/account"
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        ...mapState(["user", "loading"])
    },
    methods: {
        async getCurrentUser() {
            this.$store.commit("updateLoadingUser", true);
            let user = await CurrentUser.include("roles", "permissions").$find(
                "current"
            );
            this.$store.commit("updateUser", user);
            this.$store.commit("updateLoadingUser", false);
        }
    },
    created() {
        this.getCurrentUser();
    },
    mounted() {
        window.addEventListener("offline", () => {
            this.$buefy.snackbar.open({
                duration: 10000,
                message:
                    "You are not online anymore, please check your internet connection",
                type: "is-danger",
                position: "is-bottom",
                actionText: "Close",
                queue: false,
                onAction: () => {}
            });
        });
    }
};
</script>
