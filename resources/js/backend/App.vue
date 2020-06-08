<template>
    <div id="app">
        <navbar />
        <aside-menu :menu="menu"></aside-menu>

        <!-- <div class="columns">
            <div class="column"></div>
            <div class="column"></div>
        </div> -->
    </div>
</template>

<script>
// @b/ is an alias to /src/backend
import AsideMenu from "@b/components/AsideMenu";
import Navbar from "@b/components/Navbar";
export default {
    name: "App",
    components: { AsideMenu, Navbar },
    data() {
        return {
            menu: [
                {
                    label: "Info",
                    icon: "desktop-mac",
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
