import { UomCategory as TUomCategory } from "../api/uomCategory/UomCategory";

export const UOMCATEGORY_TITLE_FIELD = "categoryName";

export const UomCategoryTitle = (record: TUomCategory): string => {
  return record.categoryName?.toString() || String(record.id);
};
