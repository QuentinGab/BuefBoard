<template>
    <div class="sidebar-page">
        <section class="sidebar-layout">
            <b-sidebar
                position="static"
                :mobile="mobile"
                :expand-on-hover="expandOnHover"
                :reduce="reduce"
                type="is-light"
                open
            >
                <div class="p-1">
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
                                        <b-icon
                                            v-if="menuItem.menu"
                                            class="is-pulled-right"
                                            :icon="
                                                props.expanded
                                                    ? 'minus'
                                                    : 'chevron-down'
                                            "
                                        ></b-icon>
                                    </span>
                                </template>
                                <b-menu-item
                                    v-for="(menuSubItem,
                                    index) in menuItem.menu"
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
            </b-sidebar>
        </section>
    </div>
</template>

<script>
import { mapState } from "vuex";
import AsideMenuList from "@b/components/AsideMenuList";

export default {
    name: "AsideMenu",
    components: { AsideMenuList },
    data() {
        return {
            expandOnHover: false,
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
    },
    methods: {}
};
</script>

<style lang="scss">
.b-sidebar .sidebar-content {
    box-shadow: none;
}
.p-1 {
    padding: 1em;
}
.sidebar-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    // min-height: 100vh;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 100%;
        // min-height: 100vh;
    }
    .sidebar-content {
        min-height: 100vh;
    }
}
@media screen and (max-width: 1023px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1024px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>
