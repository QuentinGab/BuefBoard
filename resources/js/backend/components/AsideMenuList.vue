<template>
    <div>
        <b-menu-list label="menu.label">
            <!-- <b-menu-item
            :icon="menuItem.icon"
            :label="menuItem.label"
            v-for="(menuItem, index) in menu.menu"
            :key="index"
        >
            <template v-if="menuItem.menu">
                <b-menu-item
                    :icon="menuItem.icon"
                    :label="menuItem.label"
                    v-for="(menuSubItem, index) in menuItem.menu"
                    :key="index"
                ></b-menu-item>
            </template>
        </b-menu-item> -->
        </b-menu-list>
    </div>
</template>

<script>
export default {
    name: "AsideMenuList",
    components: {},
    props: {
        menu: {
            type: Object,
            default: () => {}
        }
    },
    methods: {}
};
</script>
