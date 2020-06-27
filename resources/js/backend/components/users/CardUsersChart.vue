<template>
    <card-count-chart :chart-data="chartData">
        <div class="columns is-marginless">
            <div class="column">
                <p class="title is-1 is-marginless">{{ total || sum }}</p>
                <p class="heading">{{ subtitle }}</p>
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
            icon: null,
            usersData: null,
            total: 0,
            period: "Last Month"
        };
    },
    watch: {
        dates: function(current, old) {
            console.log(current);
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
                        borderWidth: 1,
                        pointBorderColor: "transparent",
                        backgroundColor: null,
                        backgroundGradient: true,
                        data: this.cData
                    }
                ]
            };
        },
        labels() {
            return this.getDateRange(
                moment(this.dateStart),
                moment(this.dateEnd),
                "ddd D MMM"
            );
        },
        sum() {
            if (!this.usersData) {
                return 0;
            }
            return Object.values(this.usersData).reduce((previous, current) => {
                return previous + current;
            }, 0);
        },
        cData() {
            if (!this.usersData) {
                return null;
            }
            let data = [];
            this.getDateRange(
                moment(this.dateStart),
                moment(this.dateEnd),
                "YYYY-MM-DD"
            ).forEach(day => {
                data.push(this.usersData[day] ?? 0);
            });
            return data;
        }
    },
    methods: {
        moment() {
            return moment();
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
            axios
                .get("/api/v1/users/stats", {
                    params: {
                        "filter[created_after]": this.dateStart
                    }
                })
                .then(response => {
                    let d = response.data;
                    this.usersData = d.data;
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
