import { Form as TForm } from "../api/form/Form";

export const FORM_TITLE_FIELD = "id";

export const FormTitle = (record: TForm): string => {
  return record.id?.toString() || String(record.id);
};
