import type { DataPoint } from '../types/dashboard.types';


export function renderLineChart(ctx: CanvasRenderingContext2D, data: DataPoint[]) {
  if (!ctx) return;
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.strokeStyle = '#4ADE80'; // green line
  ctx.lineWidth = 1.5;

  data.forEach((point, i) => {
    const x = (i / data.length) * width;
    const y = height - (point.value / 100) * height;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.stroke();
}
