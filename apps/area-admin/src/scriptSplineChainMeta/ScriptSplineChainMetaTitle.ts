import { ScriptSplineChainMeta as TScriptSplineChainMeta } from "../api/scriptSplineChainMeta/ScriptSplineChainMeta";

export const SCRIPTSPLINECHAINMETA_TITLE_FIELD = "id";

export const ScriptSplineChainMetaTitle = (
  record: TScriptSplineChainMeta
): string => {
  return record.id?.toString() || String(record.id);
};
