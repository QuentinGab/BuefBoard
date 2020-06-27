<script>
import { Line, mixins } from "vue-chartjs";

export default {
    name: "LineChart",
    extends: Line,
    // mixins: [mixins.reactiveProp],
    props: {
        chartData: {
            type: Object
        },
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
                    alpha: 0.05
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
            this.updateChartGradient();
            this.renderChart(this.chartData, this.finalOptions);
        }
    },
    computed: {
        finalOptions() {
            return this.options ?? this.defaultOptions[this.mode];
        }
    },
    methods: {
        updateChartGradient() {
            if (!this.chartData) {
                return null;
            }
            this.chartData.datasets.forEach(dataset => {
                if (dataset.backgroundGradient) {
                    dataset.backgroundColor = this.createGradient();
                }
            });
            return this.chartData;
        },
        createGradient(colorStop) {
            colorStop = colorStop ?? this.defaultGradient;
            let gradient = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, this.$refs.canvas.clientHeight, 0, 0);
            // console.log(this.$data);

            // console.log(this.$data._chart.ctx);

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
        this.renderChart(this.chartData, this.finalOptions);
        this.updateChartGradient();
        this.$data._chart.update();
    }
};
</script>
