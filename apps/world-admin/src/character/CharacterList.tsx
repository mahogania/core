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
import { CHARACTERSPELL_TITLE_FIELD } from "../characterSpell/CharacterSpellTitle";

export const CharacterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Characters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Character Spells"
          source="characterspell.id"
          reference="CharacterSpell"
        >
          <TextField source={CHARACTERSPELL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
