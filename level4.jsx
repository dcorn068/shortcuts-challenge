// ------ START ------

function cleanup() {
  return updateLatestFromMachemetry({
    longName: summary.longName,
    shortName: summary.shortName,
    output: summary.output,
    outputLabel: summary.outputLabel,
    isIdleUntagged: summary.isIdleUntagged,
    callStart: summary.callStart
  });
}

// ------ FINISH ------

function cleanup() {
  const {
    outputLabel,
    longName,
    shortName,
    output,
    isIdleUntagged,
    callStart
  } = summary;

  return updateLatestFromMachemetry({
    longName,
    shortName,
    output,
    outputLabel,
    isIdleUntagged,
    callStart
  });
}
