<template>
    <card-count-chart :chart-data="chartData">
        <div class="card-content is-flex">
            <div>
                <p class="title is-1 is-marginless">{{ total }}</p>
                <p class="heading">{{ subtitle }}</p>
            </div>

            <div>
                <b-dropdown aria-role="list" v-model="dates.start">
                    <button class="button is-default" slot="trigger">
                        <b-icon icon="calendar"></b-icon>
                    </button>

                    <b-dropdown-item
                        aria-role="listitem"
                        :value="moment().subtract(1, 'weeks')"
                        >Last Week</b-dropdown-item
                    >
                    <b-dropdown-item
                        aria-role="listitem"
                        :value="moment().subtract(1, 'months')"
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
            dates: {
                start: moment().subtract(1, "months"),
                end: moment()
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
            return this.dates.start.format("YYY-MM-DD");
        },
        chartData() {
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
            return this.enumerateDaysBetweenDates(
                this.dates.start,
                this.dates.end,
                "ddd D MMM"
            );
        },
        cData() {
            if (!this.usersData) {
                return null;
            }
            let data = [];
            this.enumerateDaysBetweenDates(
                this.dates.start,
                this.dates.end,
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
        enumerateDaysBetweenDates: function(startDate, endDate, format) {
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
                        "filter[created_after]": this.dates.start.format(
                            "YYYY-MM-DD"
                        )
                    }
                })
                .then(response => {
                    let d = response.data;
                    this.usersData = d.data;
                    this.total = d.meta.total;
                    this.dates.start = moment(d.meta.after);
                });
        }
    },
    mounted() {
        this.getData();
    }
};
</script>

<style></style>
