import * as echarts from "echarts";
import { useRef } from "react";
import { useEffect } from "react";

const BarChart = ( {title}) => {
  const charDomRef = useRef(null);

  useEffect(() => {
    const chartDom = charDomRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: title
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };

    option && myChart.setOption(option);
  }, []);

  return <div ref={charDomRef} className='w-[500px] h-[400px]'></div>
};

export default BarChart;
