<template>
    <section class="section">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1">👋 Welcome {{ user.first_name }}</h1>
            </div>
            <div class="column is-6">
                <tile-users-chart :cumulative="true" mode="light" />
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
import TileUsersChart from "@b/components/users/TileUsersChart";

import { mapState } from "vuex";

export default {
    name: "Dashboard",
    components: { CardUsersChart, TileUsersChart },
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
