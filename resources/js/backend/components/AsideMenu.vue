<template>
    <aside class="">
        <div>
            <span slot="label">
                <a href="/" class="has-text-white">BuefBoard</a>
            </span>
        </div>
        <div class="menu">
            <template v-for="(menuGroup, index) in menu">
                <p
                    class="menu-label"
                    v-if="typeof menuGroup === 'string'"
                    :key="index"
                >
                    {{ menuGroup }}
                </p>
                <aside-menu-list v-else :key="index" :menu="menuGroup" />
            </template>
        </div>
    </aside>
</template>

<script>
import { mapState } from "vuex";
import AsideMenuList from "@b/components/AsideMenuList";

export default {
    name: "AsideMenu",
    components: { AsideMenuList },
    data() {
        return {};
    },
    props: {
        menu: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        // ...mapState([])
    },
    methods: {}
};
</script>

<style lang="scss"></style>
