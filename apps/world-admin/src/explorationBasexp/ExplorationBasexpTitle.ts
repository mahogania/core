import { ExplorationBasexp as TExplorationBasexp } from "../api/explorationBasexp/ExplorationBasexp";

export const EXPLORATIONBASEXP_TITLE_FIELD = "id";

export const ExplorationBasexpTitle = (record: TExplorationBasexp): string => {
  return record.id?.toString() || String(record.id);
};
