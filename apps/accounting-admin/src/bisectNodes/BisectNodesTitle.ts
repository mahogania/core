import { BisectNodes as TBisectNodes } from "../api/bisectNodes/BisectNodes";

export const BISECTNODES_TITLE_FIELD = "name";

export const BisectNodesTitle = (record: TBisectNodes): string => {
  return record.name?.toString() || String(record.id);
};
