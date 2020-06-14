<template>
    <div id="app">
        <nav-bar class="bb-navbar" />
        <div class="is-flex bb-content">
            <aside-menu :menu="menu" class="bb-sidebar" />
            <div class="bb-view">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
// @b/ is an alias to /src/backend
import { mapState } from "vuex";

import AsideMenu from "@b/components/AsideMenu";
import NavBar from "@b/components/NavBar";

import User from "@b/models/User";

export default {
    name: "App",
    components: { AsideMenu, NavBar },
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
                            to: "/media",
                            icon: "folder-multiple-image",
                            label: "Media"
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
                    label: "Info 2",
                    icon: "desktop",
                    to: "/"
                }
            ]
        };
    },
    computed: {
        ...mapState(["user"])
    },
    methods: {
        async getUser() {
            let response = await User.custom("users/current")
                .$first()
                .then(response => {
                    this.$store.commit("updateUser", response);
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
        this.getUser();
    }
};
</script>
