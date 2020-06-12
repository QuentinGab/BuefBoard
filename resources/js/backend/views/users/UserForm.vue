<template>
    <section class="p-1">
        <title-bar
            title="Manage Users"
            :menu="[
                { name: 'users', to: { name: 'users.index' } },
                {
                    name: id ? 'edit' : 'new',
                    to: {
                        name: id ? 'users.edit' : 'users.new',
                        params: { id: id }
                    }
                }
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
        return {
            user: {
                first_name: "",
                last_name: "",
                email: "",
                roles: [],
                permissions: []
            }
        };
    },
    computed: {},
    methods: {},
    mounted() {
        console.log("Component mounted.");
    },
    created() {}
};
</script>
