<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: ["chartData"],
  watch: {
    chartData: function (newVal) {
      this.renderChart(newVal, {
        responsive: true,
        maintainAspectRatio: false,
      });
    },
  },
  mounted: function () {
    console.log(this.chartData);
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false,
    });
  },
};
</script>
