<template>
    <div id="app">
        <nav-bar class="bb-navbar" />
        <div class="is-flex bb-content">
            <aside-menu :menu="menu" class="bb-sidebar" />
            <div class="bb-view">
                <router-view />
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

import User from "@b/models/User";

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
                            label: "Submenus",
                            icon: "cog",
                            menu: [
                                {
                                    to: "/sub1",
                                    icon: "folder-multiple-image",
                                    label: "Sub-item One"
                                },
                                {
                                    to: "/sub2",
                                    icon: "folder-multiple-image",
                                    label: "Sub-item Two"
                                }
                            ]
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
        async getUser() {
            this.$store.commit("updateLoadingUser", true);
            let user = await User.include("roles","permissions")
                .current()
                .catch(err => {
                    this.$buefy.toast.open({
                        message: `Error: ${err.message}`,
                        type: "is-danger",
                        queue: false
                    });
                });
            this.$store.commit("updateUser", user);
            this.$store.commit("updateLoadingUser", false);
        }
    },
    created() {
        this.getUser();
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
