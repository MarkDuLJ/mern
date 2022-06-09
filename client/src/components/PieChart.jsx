import { useState } from "react";
import { Group } from "@visx/group";
import { Pie } from "@visx/shape";
import { Text } from "@visx/text";

const coins = [
  { sym: "ADA", amount: 200, color: "#0033ad", inUSD: 1.48 },
  { sym: "SOL", amount: 5, color: "#00ffbd", inUSD: 37.6 },
  { sym: "BTC", amount: 0.005, color: "#f7931a", inUSD: 37363 },
];

export default function PieChart() {
  const [active, setActive] = useState(null);
  const width = 400;
  const half = width / 2;

  return (
    <div>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={coins}
            pieValue={(data) => data.amount * data.inUSD}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.sym === data.sym ? 20 : 16;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) =>
              pie.arcs.map((arc) => (
                <g
                  key={arc.data.sym}
                  onMouseEnter={() => setActive(arc.data)}
                  onMouseLeave={() => setActive(null)}
                >
                  <path d={pie.path(arc)} fill={arc.data.color}></path>
                </g>
              ))
            }
          </Pie>
          <Text textAnchor="middle" dy={-30}>
            Hello
          </Text>
          <Text textAnchor="middle">KKK</Text>
        </Group>
      </svg>
    </div>
  );
}
