import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureImmunitiesList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureImmunitiesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Auras" source="auras" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DispelTypeMask" source="dispelTypeMask" />
        <TextField label="Effects" source="effects" />
        <TextField label="ID" source="id" />
        <TextField label="ImmuneAoE" source="immuneAoE" />
        <TextField label="ImmuneChain" source="immuneChain" />
        <TextField label="MechanicsMask" source="mechanicsMask" />
        <TextField label="SchoolMask" source="schoolMask" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
