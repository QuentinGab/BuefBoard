<template>
    <div class="card bb-card-chart">
        <div class="chart-container is-background">
            <line-chart
                :mode="mode"
                :styles="chartStyle"
                :chart-data="chartData"
                v-if="chartData"
                ref="chart"
            ></line-chart>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import { mapState } from "vuex";

import LineChart from "@b/components/charts/LineChart";

export default {
    name: "CardCountChart",
    components: { LineChart },
    props: {
        mode: {
            type: String,
            default: "light",
            validator: function(value) {
                return ["light", "full"].indexOf(value) !== -1;
            }
        },
        chartData: {
            type: Object,
            default: null
        }
    },
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
