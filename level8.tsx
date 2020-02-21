// ------ START ------

import React, { useContext, useRef } from "react";
import AlertIcon from "../../../../svgs/AlertIcon";
import { SettingsContext } from "../../../../contexts/SettingsManager/SettingsManager";
import { GroupTileStyles } from "./GroupTileStyles";
import debounceRender from "react-debounce-render";
import CallStart from "./CallStart";
import truncateTime, { ONE_HOUR_OF_MS } from "../../../../utils/timeUtils";
import CallIcon from "../../../../svgs/CallIcon";
import {
  useForceUpdateOnInterval,
  useGetCustomerKey,
  useInterval
} from "../../../../utils/customHooks";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { GlobalStateStoreType } from "../../../../providers/GlobalStateProvider";
import { TimeRangeFinite } from "../../../../types";
import { useQuery } from "@apollo/react-hooks";
import {
  DATA_DUMP_QUERY,
  midgardClients
} from "../../../../providers/MidgardProvider";
import { getPreferredMetricFromDataDump } from "./groupTileUtils";

export default ({}) => (
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
