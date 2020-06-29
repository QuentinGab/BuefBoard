<template>
    <section class="section">
        <div class="columns">
            <div class="column is-narrow">
                <div class="card bb-card-metrics">
                    <div class="metrics-item is-success">
                        <div class="metrics-title">New Users</div>
                        <div class="metrics-value title is-3">5,097</div>
                        <div class="metrics-subvalue">
                            <b-icon icon="arrow-up" size="is-small"></b-icon>
                            +33.45%
                        </div>
                    </div>
                    <div class="metrics-item is-danger">
                        <div class="metrics-title">New Users</div>
                        <div class="metrics-value title is-3">5,097</div>
                        <div class="metrics-subvalue">
                            <b-icon icon="arrow-up" size="is-small"></b-icon>
                            +33.45%
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-6">
                <card-users-chart></card-users-chart>
            </div>
        </div>
        <div class="columns">
            
        </div>
        <div class="columns">
            <div class="column is-10">
                <users-chart></users-chart>
            </div>
        </div>
    </section>
</template>

<script>
import CardUsersChart from "@b/components/users/CardUsersChart";
import UsersChart from "@b/components/users/UsersChart";

export default {
    name: "Dashboard",
    components: { CardUsersChart, UsersChart },
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
