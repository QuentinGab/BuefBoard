<template>
    <div id="app">
        <nav-bar class="bb-navbar" />
        <div class="is-flex bb-content">
            <aside-menu :menu="menu" class="bb-sidebar" />
            <div class="">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
// @b/ is an alias to /src/backend
import AsideMenu from "@b/components/AsideMenu";
import NavBar from "@b/components/NavBar";
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
    computed: {},
    created() {}
};
</script>
