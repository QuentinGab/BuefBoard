<template>
    <div class="card">
        <div class="card-header">
            <div class="card-header-title level">
                <p>Users</p>
                <div class="level-right">
                    <div class="field is-grouped">
                        <b-radio-button
                            v-model="dates.start"
                            :native-value="
                                moment()
                                    .subtract(1, 'months')
                                    .format('YYYY-MM-DD')
                            "
                            type="is-light"
                            size="is-small"
                        >
                            <span>1 month</span>
                        </b-radio-button>
                        <b-radio-button
                            v-model="dates.start"
                            :native-value="
                                moment()
                                    .subtract(14, 'days')
                                    .format('YYYY-MM-DD')
                            "
                            type="is-light"
                            size="is-small"
                            class="is-rounded"
                        >
                            <span>14 days</span>
                        </b-radio-button>
                    </div>
                </div>
            </div>
        </div>
        <line-chart
            mode="full"
            :style="chartStyle"
            :chart-data="chartData"
            v-if="chartData"
            ref="chart"
        ></line-chart>
    </div>
</template>

<script>
import LineChart from "@b/components/charts/LineChart";
import User from "@b/models/User";

export default {
    name: "UsersChart",
    components: { LineChart },
    props: {},
    data() {
        return {
            subtitle: "Users",
            usersData: null,
            labels: null,
            total: 0,
            cumulative: false,
            chartStyle: {
                height: "100%",
                width: "100%",
                position: "relative"
            },
            dates: {
                start: moment()
                    .subtract(1, "months")
                    .format("YYYY-MM-DD"),
                end: moment().format("YYYY-MM-DD")
            }
        };
    },
    watch: {
        dateStart: function(current, old) {
            this.getData();
        }
    },
    computed: {
        dateStart() {
            return this.dates.start;
        },
        dateEnd() {
            return moment().format("YYYY-MM-DD");
        },
        chartData() {
            if (!this.usersData) {
                return null;
            }
            return {
                labels: this.labels,
                datasets: [
                    {
                        label: "Users",
                        pointBorderColor: "transparent",
                        pointBackgroundColor: "transparent",
                        borderWidth: 1,
                        lineTension: 0.3,
                        backgroundColor: function(context) {
                            let color = tinycolor(context.dataset.borderColor);
                            let gradient = context.chart.ctx.createLinearGradient(
                                0,
                                context.chart.height,
                                0,
                                0
                            );
                            gradient.addColorStop(
                                0,
                                color.setAlpha(0.01).toRgbString()
                            );
                            gradient.addColorStop(
                                1,
                                color.setAlpha(0.2).toRgbString()
                            );

                            return gradient;
                        },
                        data: this.usersData
                    }
                ]
            };
        },

        rawData() {
            return Object.values(this.usersData);
        },
        sum() {
            if (!this.usersData) {
                return 0;
            }
            return this.rawData.reduce((previous, current) => {
                return previous + current;
            }, 0);
        },
        variation() {
            if (!this.cData) {
                return 0;
            }
            if (this.cData.length < 2) {
                return 0;
            }
            return this.cData[this.cData.length - 1] - this.cData[0];
        },
        variationIcon() {
            if (this.variation < 0) {
                return "arrow-bottom-right";
            }
            if (this.variation > 0) {
                return "arrow-top-right";
            }

            return "minus";
        }
    },
    methods: {
        moment() {
            return moment();
        },
        prepareLabels(startDate, endDate, format) {
            this.labels = this.getDateRange(
                moment(startDate),
                moment(endDate),
                format ?? "D MMM"
            );
        },
        prepareData(rawData) {
            if (!rawData) {
                return null;
            }
            let finalData = [];
            let prev = 0;
            this.getDateRange(
                moment(this.dateStart),
                moment(this.dateEnd),
                "YYYY-MM-DD"
            ).forEach(day => {
                if (this.cumulative) {
                    let value = rawData[day] ? rawData[day] + prev : prev;
                    finalData.push(value);
                    prev = value;
                } else {
                    finalData.push(rawData[day] ?? 0);
                }
            });
            return finalData;
        },
        getDateRange: function(startDate, endDate, format) {
            var now = startDate.clone(),
                dates = [];

            while (now.isSameOrBefore(endDate)) {
                dates.push(now.format(format));
                now.add(1, "days");
            }
            return dates;
        },
        getData() {
            User.where("created_after", this.dateStart)
                .params({ cumulative: true })
                ._metrics()
                .then(response => {
                    let d = response.data;
                    this.usersData = this.prepareData(d.data);
                    this.prepareLabels(this.dateStart, this.dateEnd);
                    if (d.meta.total) {
                        this.total = d.meta.total;
                    }
                });
        }
    },
    mounted() {
        this.getData();
    }
};
</script>

<style></style>
