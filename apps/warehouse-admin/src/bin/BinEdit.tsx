import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BinEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="actual_qty" source="actualQty" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput label="indented_qty" source="indentedQty" />
        <TextInput label="item_code" source="itemCode" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <NumberInput label="ordered_qty" source="orderedQty" />
        <TextInput label="owner" source="owner" />
        <NumberInput label="planned_qty" source="plannedQty" />
        <NumberInput label="projected_qty" source="projectedQty" />
        <NumberInput label="reserved_qty" source="reservedQty" />
        <NumberInput
          label="reserved_qty_for_production"
          source="reservedQtyForProduction"
        />
        <NumberInput
          label="reserved_qty_for_production_plan"
          source="reservedQtyForProductionPlan"
        />
        <NumberInput
          label="reserved_qty_for_sub_contract"
          source="reservedQtyForSubContract"
        />
        <NumberInput label="reserved_stock" source="reservedStock" />
        <TextInput label="stock_uom" source="stockUom" />
        <NumberInput label="stock_value" source="stockValue" />
        <NumberInput label="valuation_rate" source="valuationRate" />
        <TextInput label="warehouse" source="warehouse" />
      </SimpleForm>
    </Edit>
  );
};
