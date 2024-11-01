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

export const BomOperationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BOMOperations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="baseCostPerUnit" source="baseCostPerUnit" />
        <TextField label="baseHourRate" source="baseHourRate" />
        <TextField label="baseOperatingCost" source="baseOperatingCost" />
        <TextField label="batchSize" source="batchSize" />
        <TextField label="costPerUnit" source="costPerUnit" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <BooleanField label="fixedTime" source="fixedTime" />
        <TextField label="hourRate" source="hourRate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="operatingCost" source="operatingCost" />
        <TextField label="operation" source="operation" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="sequenceId" source="sequenceId" />
        <BooleanField
          label="setCostBasedOnBomQty"
          source="setCostBasedOnBomQty"
        />
        <TextField label="timeInMins" source="timeInMins" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="workstation" source="workstation" />
        <TextField label="workstationType" source="workstationType" />{" "}
      </Datagrid>
    </List>
  );
};
