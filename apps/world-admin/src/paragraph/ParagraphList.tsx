import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PARAGRAPHLOCALE_TITLE_FIELD } from "../paragraphLocale/ParagraphLocaleTitle";

export const ParagraphList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Paragraphs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Paragraph Locales"
          source="paragraphlocale.id"
          reference="ParagraphLocale"
        >
          <TextField source={PARAGRAPHLOCALE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
