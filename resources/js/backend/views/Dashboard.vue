<template>
    <section class="section">
        <div class="columns">
            <div class="column is-6">
                <card-users-chart></card-users-chart>
            </div>
        </div>
    </section>
</template>

<script>
import CardUsersChart from "@b/components/users/CardUsersChart";

export default {
    name: "Dashboard",
    components: { CardUsersChart },
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
