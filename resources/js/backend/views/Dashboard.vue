<template>
    <section class="section">
        <div class="columns">
            <div class="column is-6">
                <card-users-chart></card-users-chart>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <card-users-chart-full></card-users-chart-full>
            </div>
        </div>
    </section>
</template>

<script>
import CardUsersChart from "@b/components/users/CardUsersChart";
import CardUsersChartFull from "@b/components/users/CardUsersChartFull";

export default {
    name: "Dashboard",
    components: { CardUsersChart, CardUsersChartFull },
    data() {
        return {};
    },
    computed: {},
    mounted() {
        console.log("Dashboard mounted.");
    },
    created() {}
};
</script>
