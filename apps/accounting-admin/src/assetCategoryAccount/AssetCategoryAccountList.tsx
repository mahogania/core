import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssetCategoryAccountList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetCategoryAccounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="accumulatedDepreciationAccount"
          source="accumulatedDepreciationAccount"
        />
        <TextField
          label="capitalWorkInProgressAccount"
          source="capitalWorkInProgressAccount"
        />
        <TextField label="companyName" source="companyName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField
          label="depreciationExpenseAccount"
          source="depreciationExpenseAccount"
        />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="fixedAssetAccount" source="fixedAssetAccount" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
