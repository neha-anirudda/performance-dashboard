import type { DataPoint } from '../types/dashboard.types';

/**
 * Groups data points into time buckets and calculates the average value per bucket.
 * 
 * @param data - Array of time-series data points
 * @param bucketMs - Bucket duration in milliseconds (e.g. 60000 for 1 minute)
 * @returns Aggregated array of averaged DataPoints
 */
export function aggregateAverage(data: DataPoint[], bucketMs: number): DataPoint[] {
  // ✅ safety check for empty data
  if (!data || data.length === 0) return [];

  const out: DataPoint[] = [];

  // ✅ guard to ensure data[0] is safe
  const first = data[0];
  if (!first) return [];

  let bucketStart = Math.floor(first.timestamp / bucketMs) * bucketMs;
  let sum = 0;
  let count = 0;

  for (const p of data) {
    const bucket = Math.floor(p.timestamp / bucketMs) * bucketMs;

    // When entering a new bucket, push the average of the previous one
    if (bucket !== bucketStart) {
      out.push({
        timestamp: bucketStart,
        value: sum / Math.max(1, count),
      });
      bucketStart = bucket;
      sum = p.value;
      count = 1;
    } else {
      sum += p.value;
      count++;
    }
  }

  // ✅ push the last bucket average
  out.push({
    timestamp: bucketStart,
    value: sum / Math.max(1, count),
  });

  return out;
}
