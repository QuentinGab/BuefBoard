<template>
    <card-count-chart :chartData="chartData">
        <div class="card-content">
            <p class="title is-1 is-marginless">{{ title }}</p>
            <p class="heading">{{ subtitle }}</p>
        </div>
    </card-count-chart>
</template>

<script>
import CardCountChart from "@b/components/charts/cards/CardCountChart";

export default {
    name: "CardUserChart",
    components: { CardCountChart },
    props: {},
    data() {
        return {
            title: "52",
            subtitle: "Users",
            icon: null,
            chartData: {
                labels: [1, 2, 3, 4, 5, 6, 7],
                datasets: [
                    {
                        label: "Data One",
                        borderColor: null,
                        pointBackgroundColor: "transparent",
                        borderWidth: 1,
                        pointBorderColor: "transparent",
                        backgroundColor: null,
                        backgroundGradient: true,
                        data: [1, 2, 4, 3, 5, 6, 7]
                    }
                ]
            }
        };
    },
    computed: {},
    methods: {},
    mounted() {},
    created() {}
};
</script>

<style></style>
