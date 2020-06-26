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
                    step: 0.2,
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
                full: null
            }
        };
    },
    computed: {},
    methods: {
        prepareChartData() {
            this.chartData.datasets.forEach(dataset => {
                if (dataset.backgroundGradient) {
                    let gradient = this.createGradient();
                    dataset.backgroundColor = gradient;
                }
            });
        },
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
        this.prepareChartData();
        this.renderChart(this.chartData, this.defaultOptions[this.mode]);
    }
};
</script>
