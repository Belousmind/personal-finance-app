"use client";
import { useRef, useEffect } from "react";
import type { Budget } from "@/store/budgets/type";
import styles from "./style.module.scss";

const width = 240;
const height = 240;

type Props = {
  budgets: Budget[];
};

function PieChart({ budgets }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const chartData = budgets.map((item) => ({
    value: item.total,
    color: item.theme,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const total = chartData.reduce((sum, item) => sum + item.value, 0);
    let startAngle = 0;

    chartData.forEach((item) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI;

      ctx.beginPath();
      ctx.moveTo(width / 2, height / 2);
      ctx.arc(
        width / 2,
        height / 2,
        Math.min(width, height) / 2 - 10,
        startAngle,
        startAngle + sliceAngle
      );
      ctx.closePath();

      ctx.fillStyle = item.color;
      ctx.fill();

      startAngle += sliceAngle;
    });

    ctx.beginPath();
    ctx.arc(
      width / 2,
      height / 2,
      70, // радиус
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "white";
    ctx.fill();
  }, [budgets, chartData]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}

export default function Chart({ budgets }: Props) {
  const limit = budgets.reduce((acc, b) => acc + b.maximum, 0);
  const spend = budgets.reduce((acc, b) => acc + b.total, 0);

  return (
    <div className={styles.chart}>
      <PieChart budgets={budgets} />
      <div className={styles["chart-info"]}>
        <span>${Math.abs(spend).toFixed(0)}</span>
        <span className={styles.limit}>of ${limit.toFixed(0)} limit</span>
      </div>
    </div>
  );
}
