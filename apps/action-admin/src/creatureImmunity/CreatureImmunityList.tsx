import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureImmunityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureImmunities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Auras" source="auras" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Dispel Mask" source="dispelMask" />
        <TextField label="Effects" source="effects" />
        <TextField label="ID" source="id" />
        <TextField label="Mechanic Mask" source="mechanicMask" />
        <TextField label="School Mask" source="schoolMask" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
