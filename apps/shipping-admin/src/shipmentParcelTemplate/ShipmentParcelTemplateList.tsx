import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ShipmentParcelTemplateList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ShipmentParcelTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="height" source="height" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="length" source="length" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parcel_template_name" source="parcelTemplateName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight" source="weight" />
        <TextField label="width" source="width" />{" "}
      </Datagrid>
    </List>
  );
};
