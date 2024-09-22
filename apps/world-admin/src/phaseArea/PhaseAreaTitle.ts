import { PhaseArea as TPhaseArea } from "../api/phaseArea/PhaseArea";

export const PHASEAREA_TITLE_FIELD = "id";

export const PhaseAreaTitle = (record: TPhaseArea): string => {
  return record.id?.toString() || String(record.id);
};
