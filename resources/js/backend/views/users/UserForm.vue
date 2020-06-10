<template>
    <section class="p-1">
        <title-bar
            title="Manage Users"
            :menu="[
                { name: 'users', to: { name: 'users.index' } },
                { name: 'edit', to: { name: 'users.edit', params: { id: id } } }
            ]"
        ></title-bar>
    </section>
</template>

<script>
import TitleBar from "@b/components/TitleBar";

export default {
    name: "UserForm",
    components: { TitleBar },
    props: {
        id: {
            default: null
        }
    },
    data() {
        return {};
    },
    computed: {},
    methods: {},
    mounted() {
        console.log("Component mounted.");
    },
    created() {}
};
</script>
