import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssetDepreciationScheduleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetDepreciationSchedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField label="asset" source="asset" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="dailyProrataBased" source="dailyProrataBased" />
        <TextField label="depreciationMethod" source="depreciationMethod" />
        <TextField label="docstatus" source="docstatus" />
        <TextField
          label="expectedValueAfterUsefulLife"
          source="expectedValueAfterUsefulLife"
        />
        <TextField label="financeBook" source="financeBook" />
        <TextField label="financeBookId" source="financeBookId" />
        <TextField
          label="frequencyOfDepreciation"
          source="frequencyOfDepreciation"
        />
        <TextField label="grossPurchaseAmount" source="grossPurchaseAmount" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="namingSeries" source="namingSeries" />
        <TextField label="notes" source="notes" />
        <TextField
          label="openingAccumulatedDepreciation"
          source="openingAccumulatedDepreciation"
        />
        <TextField
          label="openingNumberOfBookedDepreciations"
          source="openingNumberOfBookedDepreciations"
        />
        <TextField label="owner" source="owner" />
        <TextField label="rateOfDepreciation" source="rateOfDepreciation" />
        <TextField label="shiftBased" source="shiftBased" />
        <TextField label="status" source="status" />
        <TextField
          label="totalNumberOfDepreciations"
          source="totalNumberOfDepreciations"
        />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
