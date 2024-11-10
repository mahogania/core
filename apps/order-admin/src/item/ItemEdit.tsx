import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="allowAlternativeItem"
          source="allowAlternativeItem"
        />
        <NumberInput
          step={1}
          label="autoCreateAssets"
          source="autoCreateAssets"
        />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="disabled" source="disabled" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="hasVariants" source="hasVariants" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="isFixedAsset" source="isFixedAsset" />
        <NumberInput step={1} label="isGroupedAsset" source="isGroupedAsset" />
        <NumberInput step={1} label="isStockItem" source="isStockItem" />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="itemGroup" source="itemGroup" />
        <TextInput label="itemName" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="namingSeries" source="namingSeries" />
        <NumberInput label="openingStock" source="openingStock" />
        <TextInput label="owner" source="owner" />
        <NumberInput label="standardRate" source="standardRate" />
        <TextInput label="stockUom" source="stockUom" />
        <NumberInput label="valuationRate" source="valuationRate" />
      </SimpleForm>
    </Edit>
  );
};
