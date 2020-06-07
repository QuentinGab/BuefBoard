<template>
    <div id="app">
        
        <div class="columns">
            <div class="column">
                <aside-menu :menu="menu"></aside-menu>
            </div>
            <div class="column"></div>
        </div>
    </div>
</template>

<script>
// @b/ is an alias to /src/backend
import AsideMenu from "@b/components/AsideMenu";
export default {
    name: "App",
    components: { AsideMenu },
    data() {
        return {
            menu: [
                "General",
                [
                    {
                        to: "/",
                        icon: "desktop-mac",
                        label: "Dashboard"
                    },
                    {
                        to: "/media",
                        icon: "folder-multiple-image",
                        label: "Media"
                    }
                ],
                "Resource"
            ]
        };
    },
    computed: {},
    created() {}
};
</script>
