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
import { CHOICE_TITLE_FIELD } from "../choice/ChoiceTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { RESPONSELOCALE_TITLE_FIELD } from "../responseLocale/ResponseLocaleTitle";

export const ResponseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Responses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Choice" source="choice.id" reference="Choice">
          <TextField source={CHOICE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Response Locales"
          source="responselocale.id"
          reference="ResponseLocale"
        >
          <TextField source={RESPONSELOCALE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
