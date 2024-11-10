import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ItemGroupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ItemGroups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <BooleanField label="isGroup" source="isGroup" />
        <TextField label="itemGroupName" source="itemGroupName" />
        <TextField label="lft" source="lft" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="oldParent" source="oldParent" />
        <TextField label="owner" source="owner" />
        <TextField label="parentItemGroup" source="parentItemGroup" />
        <TextField label="rgt" source="rgt" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
