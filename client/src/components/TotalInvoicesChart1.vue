<script>
import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'BarChart';

export const data = [
  ['City', '2010 Population', '2000 Population'],
  ['New York City, NY', 8175000, 8008000],
  ['Los Angeles, CA', 3792000, 3694000],
  ['Chicago, IL', 2695000, 2896000],
  ['Houston, TX', 2099000, 1953000],
  ['Philadelphia, PA', 1526000, 1517000],
];

export const options = {
  title: 'Population of Largest U.S. Cities',
  chartArea: { width: '50%' },
  backgroundColor: { fill:'transparent' },
  hAxis: {
    title: 'Total Population',
    minValue: 0,
  },
  vAxis: {
    title: 'Cities',
  },
};

export default defineComponent({
  name: 'GoogleChart2',
  components: {
    GChart,
  },
  setup() {
    return () =>
      h(GChart, {
        data,
        options,
        type,
      });
  },
});

</script>