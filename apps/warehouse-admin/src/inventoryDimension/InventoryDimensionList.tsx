import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InventoryDimensionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Inventory Dimensions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ApplyToAllDoctypes" source="applyToAllDoctypes" />
        <TextField label="Condition" source="condition" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Creation" source="creation" />
        <TextField label="DimensionName" source="dimensionName" />
        <TextField label="Disabled" source="disabled" />
        <TextField label="Docstatus" source="docstatus" />
        <TextField label="DocumentType" source="documentType" />
        <TextField label="FetchFromParent" source="fetchFromParent" />
        <TextField label="ID" source="id" />
        <TextField label="Idx" source="idx" />
        <TextField label="Isttable" source="isttable" />
        <TextField label="MandatoryDependsOn" source="mandatoryDependsOn" />
        <TextField label="Modified" source="modified" />
        <TextField label="ModifiedBy" source="modifiedBy" />
        <TextField label="Name" source="name" />
        <TextField label="Owner" source="owner" />
        <TextField label="ReferenceDocument" source="referenceDocument" />
        <TextField label="Reqd" source="reqd" />
        <TextField label="SourceFieldname" source="sourceFieldname" />
        <TextField label="TargetFieldname" source="targetFieldname" />
        <TextField label="TypeOfTransaction" source="typeOfTransaction" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="ValidateNegativeStock"
          source="validateNegativeStock"
        />{" "}
      </Datagrid>
    </List>
  );
};
