import { PoolTemplate as TPoolTemplate } from "../api/poolTemplate/PoolTemplate";

export const POOLTEMPLATE_TITLE_FIELD = "id";

export const PoolTemplateTitle = (record: TPoolTemplate): string => {
  return record.id?.toString() || String(record.id);
};
