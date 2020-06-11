<template>
    <b-sidebar position="static" :reduce="reduce" type="is-white" open>
        <div class="">
            <b-menu class="is-custom-mobile">
                <b-menu-list
                    :label="menuList.label"
                    v-for="(menuList, index) in menu"
                    :key="index"
                >
                    <b-menu-item
                        :icon="menuItem.icon"
                        v-for="(menuItem, index) in menuList.menu"
                        :key="index"
                        :to="menuItem.to"
                        :href="menuItem.href"
                        :tag="menuItem.to ? 'router-link' : 'a'"
                    >
                        <template slot="label" slot-scope="props">
                            <span>
                                {{ menuItem.label }}
                            </span>
                            <b-icon
                                v-if="menuItem.menu"
                                class="is-pulled-right"
                                :icon="
                                    props.expanded ? 'minus' : 'chevron-down'
                                "
                            ></b-icon>
                        </template>
                        <b-menu-item
                            v-for="(menuSubItem, index) in menuItem.menu"
                            :key="index"
                            :icon="menuSubItem.icon"
                            :label="menuSubItem.label"
                            :to="menuSubItem.to"
                            :href="menuSubItem.href"
                            :tag="menuSubItem.to ? 'router-link' : 'a'"
                        ></b-menu-item>
                    </b-menu-item>
                </b-menu-list>
            </b-menu>
        </div>
        <div>
            <div class="button-expand" @click="reduce = !reduce">
                <b-icon
                    :icon="reduce ? 'chevron-right' : 'chevron-left'"
                ></b-icon>
            </div>
        </div>
    </b-sidebar>
</template>

<script>
import { mapState } from "vuex";
import AsideMenuList from "@b/components/AsideMenuList";

export default {
    name: "AsideMenu",
    components: { AsideMenuList },
    data() {
        return {
            mobile: "reduce",
            reduce: false
        };
    },
    props: {
        menu: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        // ...mapState([])
        isMobile() {
            return window.innerWidth < 769;
        }
    },
    methods: {},
    created() {
        this.reduce = this.isMobile;
    }
};
</script>
