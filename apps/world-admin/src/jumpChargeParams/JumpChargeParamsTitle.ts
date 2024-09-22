import { JumpChargeParams as TJumpChargeParams } from "../api/jumpChargeParams/JumpChargeParams";

export const JUMPCHARGEPARAMS_TITLE_FIELD = "id";

export const JumpChargeParamsTitle = (record: TJumpChargeParams): string => {
  return record.id?.toString() || String(record.id);
};
