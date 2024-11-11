import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const SubcontractingBomList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SubcontractingBOMS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="conversion_factor" source="conversionFactor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="finished_good" source="finishedGood" />
        <TextField label="finished_good_bom" source="finishedGoodBom" />
        <TextField label="finished_good_qty" source="finishedGoodQty" />
        <TextField label="finished_good_uom" source="finishedGoodUom" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <BooleanField label="is_active" source="isActive" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="service_item" source="serviceItem" />
        <TextField label="service_item_qty" source="serviceItemQty" />
        <TextField label="service_item_uom" source="serviceItemUom" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
