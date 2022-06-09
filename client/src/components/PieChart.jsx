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
  return <div>PieChart</div>;
}
