// START
function getMetrics(
  isSanofi: boolean, isCustomerWhoUsesOEE: boolean, oeePercent?: number | null, effectiveUptimePercent: number | null | undefined, metricDisplay: string, rollupMetric: RollupWithTagsAndCountsAndRange | undefined, preferredMetric: MetricLabelsEnum, outputCount?: number | null, outputLabel?: string
  )

// FINISH
function getMetrics({
  isSanofi,
  isCustomerWhoUsesOEE,
  oeePercent,
  effectiveUptimePercent,
  metricDisplay,
  rollupMetric,
  preferredMetric,
  outputCount
}: {
  isSanofi: boolean;
  isCustomerWhoUsesOEE: boolean;
  oeePercent?: number | null;
  effectiveUptimePercent: number | null | undefined;
  metricDisplay: string;
  rollupMetric: RollupWithTagsAndCountsAndRange | undefined;
  preferredMetric: MetricLabelsEnum;
  outputCount?: number | null;
  outputLabel?: string;
})