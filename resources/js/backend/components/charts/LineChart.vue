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
                    }
                },
                full: null
            }
        };
    },
    computed: {
        finalOptions() {
            return this.options ?? this.defaultOptions[this.mode];
        }
    },
    methods: {},
    mounted() {
        this.renderChart(this.chartData, this.finalOptions);
    }
};
</script>
