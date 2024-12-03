import { ScriptSplineChainWaypoints as TScriptSplineChainWaypoints } from "../api/scriptSplineChainWaypoints/ScriptSplineChainWaypoints";

export const SCRIPTSPLINECHAINWAYPOINTS_TITLE_FIELD = "id";

export const ScriptSplineChainWaypointsTitle = (
  record: TScriptSplineChainWaypoints
): string => {
  return record.id?.toString() || String(record.id);
};
