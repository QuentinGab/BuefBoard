<template>
    <section class="section">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1">
                    <b>Hello</b> <br />
                    {{ user.first_name }} 👋
                </h1>
                <b-taglist class="subtitle">
                    <b-tag
                        v-for="role in user.roles"
                        :key="role.id"
                        type="is-primary"
                    >
                        {{ role.name }}
                    </b-tag>
                </b-taglist>
            </div>
            <div class="column is-6">
                <card-users-chart mode="light" />
            </div>
        </div>
        <div class="columns">
            <div class="column is-12">
                <card-users-chart :cumulative="true" />
            </div>
        </div>
        <div class="columns">
            <div class="column is-12">
                <card-users-chart type="bar" :cumulative="true" />
            </div>
        </div>
    </section>
</template>

<script>
import CardUsersChart from "@b/components/users/CardUsersChart";

import { mapState } from "vuex";

export default {
    name: "Dashboard",
    components: { CardUsersChart },
    data() {
        return {};
    },
    methods: {},
    computed: {
        ...mapState(["user", "loading"])
    },
    mounted() {},
    created() {}
};
</script>
