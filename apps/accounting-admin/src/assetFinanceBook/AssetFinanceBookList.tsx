import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssetFinanceBookList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetFinanceBooks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="dailyProrataBased" source="dailyProrataBased" />
        <TextField label="depreciationMethod" source="depreciationMethod" />
        <TextField
          label="depreciationStartDate"
          source="depreciationStartDate"
        />
        <TextField label="docstatus" source="docstatus" />
        <TextField
          label="expectedValueAfterUsefulLife"
          source="expectedValueAfterUsefulLife"
        />
        <TextField label="financeBook" source="financeBook" />
        <TextField
          label="frequencyOfDepreciation"
          source="frequencyOfDepreciation"
        />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="rateOfDepreciation" source="rateOfDepreciation" />
        <TextField
          label="salvageValuePercentage"
          source="salvageValuePercentage"
        />
        <TextField label="shiftBased" source="shiftBased" />
        <TextField
          label="totalNumberOfBookedDepreciations"
          source="totalNumberOfBookedDepreciations"
        />
        <TextField
          label="totalNumberOfDepreciations"
          source="totalNumberOfDepreciations"
        />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="valueAfterDepreciation"
          source="valueAfterDepreciation"
        />{" "}
      </Datagrid>
    </List>
  );
};
