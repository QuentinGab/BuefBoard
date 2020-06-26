<template>
    <div class="card bb-card-chart">
        <slot></slot>
        <div class="chart-container is-background">
            <line-chart
                :styles="chartStyle"
                :chart-data="chartData"
                v-if="chartData"
                ref="chart"
            ></line-chart>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

import LineChart from "@b/components/charts/LineChart";

export default {
    name: "CardCountChart",
    components: { LineChart },
    props: ["chartData"],
    data() {
        return {
            chartStyle: {
                height: "100%",
                width: "100%",
                position: "relative"
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
