<template>
    <section class="section">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1">👋 Welcome {{ user.first_name }}</h1>
            </div>
            <div class="column is-6">
                <card-users-chart></card-users-chart>
            </div>
        </div>
        <div class="columns">
            <div class="column is-12">
                <users-chart></users-chart>
            </div>
        </div>
    </section>
</template>

<script>
import CardUsersChart from "@b/components/users/CardUsersChart";
import UsersChart from "@b/components/users/UsersChart";
import { mapState } from "vuex";
export default {
    name: "Dashboard",
    components: { CardUsersChart, UsersChart },
    data() {
        return {};
    },
    computed: {
        ...mapState(["user", "loading"])
    },
    mounted() {},
    created() {}
};
</script>
