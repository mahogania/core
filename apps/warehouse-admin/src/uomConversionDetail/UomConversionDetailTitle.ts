import { UomConversionDetail as TUomConversionDetail } from "../api/uomConversionDetail/UomConversionDetail";

export const UOMCONVERSIONDETAIL_TITLE_FIELD = "name";

export const UomConversionDetailTitle = (
  record: TUomConversionDetail
): string => {
  return record.name?.toString() || String(record.id);
};
