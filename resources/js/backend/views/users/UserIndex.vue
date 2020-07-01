<template>
    <section>
        <title-bar
            class="p-1"
            title="Manage Users"
            :menu="[{ name: 'users', to: '/users/index' }]"
        ></title-bar>
        <div class="columns is-marginless">
            <div class="column is-narrow">
                <card-metrics>
                    <card-metrics-item
                        class="is-success"
                        title="Total Users"
                        :value="metrics.total"
                        :subvalue="`${totalVariation}%`"
                        :icon="totalIcon"
                    ></card-metrics-item>
                    <card-metrics-item
                        class="is-danger"
                        title="Blocked Users"
                        :value="metrics.blocked"
                    ></card-metrics-item>
                    <card-metrics-item
                        class="is-danger"
                        title="Trashed Users"
                        :value="metrics.deleted"
                    ></card-metrics-item>
                    <card-metrics-item>
                        <doughnut-chart
                            :style="chartStyle"
                            :height="84"
                            :width="84"
                            :chart-data="{
                                datasets: [
                                    {
                                        data: [
                                            metrics.total,
                                            metrics.blocked,
                                            metrics.deleted
                                        ],
                                        backgroundColor: charts.colors,
                                        label: 'Users'
                                    }
                                ],
                                labels: ['active', 'blocked', 'trashed']
                            }"
                            mode="light"
                        />
                    </card-metrics-item>
                </card-metrics>
            </div>
        </div>
        <div class="columns is-marginless">
            <div class="column is-12">
                <users-table
                    canFilter
                    canSelect
                    canDelete
                    canDestroy
                    canBlock
                    canSeeTrashed
                />
            </div>
        </div>
    </section>
</template>

<script>
import TitleBar from "@b/components/TitleBar";
import CardMetrics from "@b/components/CardMetrics";
import CardMetricsItem from "@b/components/CardMetricsItem";
import UsersTable from "@b/components/users/UsersTable";
import DoughnutChart from "@b/components/charts/DoughnutChart";

import User from "@b/models/User";

import { mapState } from "vuex";

export default {
    name: "UserIndex",
    components: {
        TitleBar,
        UsersTable,
        CardMetrics,
        CardMetricsItem,
        DoughnutChart
    },
    data() {
        return {
            metrics: {
                total: 0,
                blocked: 0,
                deleted: 0,
                new: null
            },
            chartStyle: {
                height: "100%",
                width: "100%",
                position: "relative"
            }
        };
    },
    computed: {
        ...mapState(["charts"]),
        totalIcon() {
            return this.computeIcon(this.totalVariation);
        },
        totalVariation() {
            if (!this.metrics.new) {
                return 0;
            }
            return Math.round(
                this.computeVariation(
                    this.metrics.total - this.metrics.new.month,
                    this.metrics.total
                ) * 100
            );
        }
    },
    methods: {
        computeIcon(value) {
            if (value > 0) {
                return "arrow-top-right-thick";
            }
            if (value < 0) {
                return "arrow-down";
            }
            return "minus";
        },
        computeVariation(start, end) {
            if (!start || !end) {
                return 0;
            }

            return (end - start) / start;
        },
        async getMetrics() {
            await User.metrics().then(response => {
                this.metrics = response.data.overview;
            });
        }
    },
    created() {
        this.getMetrics();
    },
    mounted() {}
};
</script>
