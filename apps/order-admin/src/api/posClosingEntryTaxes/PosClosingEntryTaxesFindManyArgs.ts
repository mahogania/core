import { PosClosingEntryTaxesWhereInput } from "./PosClosingEntryTaxesWhereInput";
import { PosClosingEntryTaxesOrderByInput } from "./PosClosingEntryTaxesOrderByInput";

export type PosClosingEntryTaxesFindManyArgs = {
  where?: PosClosingEntryTaxesWhereInput;
  orderBy?: Array<PosClosingEntryTaxesOrderByInput>;
  skip?: number;
  take?: number;
};
