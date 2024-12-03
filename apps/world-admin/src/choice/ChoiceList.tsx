import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHOICELOCALE_TITLE_FIELD } from "../choiceLocale/ChoiceLocaleTitle";
import { RESPONSE_TITLE_FIELD } from "../response/ResponseTitle";

export const ChoiceList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Choices"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Choice Locales"
          source="choicelocale.id"
          reference="ChoiceLocale"
        >
          <TextField source={CHOICELOCALE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Responses"
          source="response.id"
          reference="Response"
        >
          <TextField source={RESPONSE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
