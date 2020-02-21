// ------ FINISH ------

import React from "react";
import AlertIcon from "../../../../svgs/AlertIcon";
import { GroupTileStyles } from "./GroupTileStyles";
import CallStart from "./CallStart";
import { Button } from "@material-ui/core";

export default ({
  isLargeTiles,
  tileWidth,
  callStart,
  showCountNotMetricOnGroupTile,
  isTilesPageFullDay,
  output,
  outputLabel,
  metricPercent,
  isIdleUntagged
}) => (
  <GroupTileStyles isLargeTiles={isLargeTiles} tileWidth={tileWidth}>
    <Button>
      <div className="group-tile">
        <div className="group-name">{name}</div>

        {callStart ? (
          <CallStart callStartMs={callStart * 1000} />
        ) : (
          !callStart &&
          // if there's a count on any sub-process (showCountNotMetricOnGroupTile)
          // show the count + label
          (showCountNotMetricOnGroupTile && !isTilesPageFullDay ? (
            <div className="group-output">
              <div className="group-output-quantity">
                {output || output === 0 ? output.toFixed(0) : "--"}
              </div>
              <div className="group-output-label">
                {outputLabel ? outputLabel : ""}
              </div>
            </div>
          ) : (
            <div className="group-performance">
              {metricPercent || metricPercent === 0
                ? metricPercent.toFixed(0)
                : "--"}
            </div>
          ))
        )}
        {isIdleUntagged && (
          <div className="group-alert-icon">
            <AlertIcon />
          </div>
        )}
      </div>
    </Button>
  </GroupTileStyles>
);

// ------ FINISH ------
