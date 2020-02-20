// ------ START ------

function cleanup() {
  const networkConnections = {
    "Machemetry: processes": machemetryStatus,
    "Askr: shifts": askrShiftsStatus,
    "Askr: segments": askrSegmentsStatus,
    "Askr: aggregates": askrAggregatesStatus,
    "Midgard: outputCounts": midgardOutputCountsStatus,
    "Midgard: skuScale, skuStart": midgardSkuInfoStatus
  };
  return {
    machemetryStatus: Object.values(latestFromMachemetry).length > 0,
    askrShiftsStatus: Object.values(shifts).length > 0,
    askrSegmentsStatus: Object.values(segments).length > 0,
    askrAggregatesStatus:
      Object.values(rollupsMetricForCurrentShift).length +
        Object.values(rollupsMetricForCurrent24Hours).length +
        Object.values(rollupsMetricForCustomRange).length >
      0,
    midgardSkuInfoStatus: Object.values(allMidgardData).length > 0,
    midgardOutputCountsStatus: Object.values(outputCounts).length > 0
  };
}

// ------ FINISH ------

function cleanup() {
  const machemetryStatus = Object.values(latestFromMachemetry).length > 0;
  const askrShiftsStatus = Object.values(shifts).length > 0;
  const askrSegmentsStatus = Object.values(segments).length > 0;
  const askrAggregatesStatus =
    Object.values(rollupsMetricForCurrentShift).length +
      Object.values(rollupsMetricForCurrent24Hours).length +
      Object.values(rollupsMetricForCustomRange).length >
    0;
  const midgardSkuInfoStatus = Object.values(allMidgardData).length > 0;
  const midgardOutputCountsStatus = Object.values(outputCounts).length > 0;

  const networkConnections = {
    "Machemetry: processes": machemetryStatus,
    "Askr: shifts": askrShiftsStatus,
    "Askr: segments": askrSegmentsStatus,
    "Askr: aggregates": askrAggregatesStatus,
    "Midgard: outputCounts": midgardOutputCountsStatus,
    "Midgard: skuScale, skuStart": midgardSkuInfoStatus
  };
  return {
    networkConnections
  };
}
