<template>
    <section>
        <title-bar
            class="p-1"
            title="Manage Users"
            :menu="[{ name: 'users', to: '/users/index' }]"
        ></title-bar>
        <div class="p-1">
            <users-table
                canFilter
                canSelect
                canDelete
                canBlock
                canSeeTrashed
            ></users-table>
        </div>
    </section>
</template>

<script>
import TitleBar from "@b/components/TitleBar";
import { mapState } from "vuex";

import UsersTable from "@b/components/users/UsersTable";

export default {
    name: "UserIndex",
    components: { TitleBar, UsersTable },
    data() {
        return {};
    },
    computed: {},
    methods: {},
    mounted() {},
    created() {}
};
</script>
