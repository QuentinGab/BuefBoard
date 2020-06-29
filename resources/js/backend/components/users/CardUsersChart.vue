<template>
    <card-count-chart :chart-data="chartData">
        <div class="columns is-marginless">
            <div class="column">
                <div>
                    <div class="is-flex">
                        <p class="is-1 title is-marginless">
                            {{ total || sum }}
                        </p>
                        <b-icon :icon="this.variationIcon"></b-icon>
                    </div>
                    <p class="heading">{{ subtitle }}</p>
                </div>
            </div>

            <div class="column is-narrow">
                <b-dropdown
                    aria-role="list"
                    v-model="period"
                    position="is-bottom-left"
                >
                    <button class="button is-default is-small" slot="trigger">
                        {{ period }}
                    </button>

                    <b-dropdown-item aria-role="listitem" value="Last Week"
                        >Last Week</b-dropdown-item
                    >
                    <b-dropdown-item aria-role="listitem" value="Last Month"
                        >Last Month</b-dropdown-item
                    >
                </b-dropdown>
            </div>
        </div>
    </card-count-chart>
</template>

<script>
import CardCountChart from "@b/components/charts/cards/CardCountChart";
import User from "@b/models/User";

export default {
    name: "CardUserChart",
    components: { CardCountChart },
    props: {},
    data() {
        return {
            subtitle: "Users",
            usersData: null,
            labels: null,
            total: 0,
            period: "Last Month",
            cumulative: false
        };
    },
    watch: {
        dateStart: function(current, old) {
            this.getData();
        }
    },
    computed: {
        dateStart() {
            if (this.period == "Last Month") {
                return moment()
                    .subtract(1, "months")
                    .format("YYYY-MM-DD");
            }
            if (this.period == "Last Week") {
                return moment()
                    .subtract(1, "weeks")
                    .format("YYYY-MM-DD");
            }
            return moment(this.period).format("YYYY-MM-DD");
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
                        pointBackgroundColor: "transparent",
                        pointBorderColor: "transparent",
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
                format ?? "ddd D MMM"
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
