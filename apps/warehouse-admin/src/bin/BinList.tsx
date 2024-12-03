import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BinList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Bins"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="actual_qty" source="actualQty" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="indented_qty" source="indentedQty" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="ordered_qty" source="orderedQty" />
        <TextField label="owner" source="owner" />
        <TextField label="planned_qty" source="plannedQty" />
        <TextField label="projected_qty" source="projectedQty" />
        <TextField label="reserved_qty" source="reservedQty" />
        <TextField
          label="reserved_qty_for_production"
          source="reservedQtyForProduction"
        />
        <TextField
          label="reserved_qty_for_production_plan"
          source="reservedQtyForProductionPlan"
        />
        <TextField
          label="reserved_qty_for_sub_contract"
          source="reservedQtyForSubContract"
        />
        <TextField label="reserved_stock" source="reservedStock" />
        <TextField label="stock_uom" source="stockUom" />
        <TextField label="stock_value" source="stockValue" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="valuation_rate" source="valuationRate" />
        <TextField label="warehouse" source="warehouse" />{" "}
      </Datagrid>
    </List>
  );
};
