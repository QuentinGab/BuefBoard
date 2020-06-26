<script>
import { Line, mixins } from "vue-chartjs";

export default {
    name: "LineChart",
    extends: Line,
    mixins: [mixins.reactiveProp],
    props: {
        mode: {
            type: String,
            default: "light",
            validator: function(value) {
                return ["light", "full"].indexOf(value) !== -1;
            }
        }
    },
    data() {
        return {
            defaultGradient: [
                {
                    step: 0,
                    color: "#e5e5e5",
                    alpha: 0
                },
                {
                    step: 1,
                    color: "#e5e5e5",
                    alpha: 1
                }
            ],
            defaultOptions: {
                light: {
                    tooltips: {
                        mode: "index",
                        intersect: false
                    },

                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [
                            {
                                display: false,
                                gridLines: {
                                    display: false
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: false,
                                gridLines: {
                                    display: false
                                }
                            }
                        ]
                    },
                    responsive: true,
                    maintainAspectRatio: false
                },
                full: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        };
    },
    watch: {
        chartData() {
            this.renderChart(this.finalChartData, this.finalOptions);

            console.log("updates");
        }
    },
    computed: {
        finalOptions() {
            return this.options ?? this.defaultOptions[this.mode];
        },
        finalChartData() {
            if (!this.chartData) {
                return null;
            }
            for (let i = 0; i < this.chartData.datasets.length; i++) {
                const dataset = this.chartData.datasets[i];
                if (dataset.backgroundGradient) {
                    dataset.backgroundColor = this.createGradient();
                }
            }
            return this.chartData;
        }
    },
    methods: {
        createGradient(colorStop) {
            let gradient = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, this.$refs.canvas.height, 0, 0);

            if (colorStop == null) {
                colorStop = this.defaultGradient;
            }
            colorStop.forEach(e => {
                gradient.addColorStop(
                    e.step,
                    tinycolor(e.color)
                        .setAlpha(e.alpha)
                        .toRgbString()
                );
            });

            return gradient;
        }
    },
    mounted() {
        this.renderChart(this.finalChartData, this.finalOptions);
    }
};
</script>
