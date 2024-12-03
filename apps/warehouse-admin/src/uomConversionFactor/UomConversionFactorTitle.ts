import { UomConversionFactor as TUomConversionFactor } from "../api/uomConversionFactor/UomConversionFactor";

export const UOMCONVERSIONFACTOR_TITLE_FIELD = "name";

export const UomConversionFactorTitle = (
  record: TUomConversionFactor
): string => {
  return record.name?.toString() || String(record.id);
};
