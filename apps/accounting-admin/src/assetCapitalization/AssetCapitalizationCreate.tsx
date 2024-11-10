import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const AssetCapitalizationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amendedFrom" source="amendedFrom" />
        <NumberInput label="assetItemsTotal" source="assetItemsTotal" />
        <TextInput label="capitalizationMethod" source="capitalizationMethod" />
        <TextInput label="company" source="company" />
        <TextInput label="costCenter" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="entryType" source="entryType" />
        <TextInput label="financeBook" source="financeBook" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="namingSeries" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="postingDate" source="postingDate" />
        <DateTimeInput label="postingTime" source="postingTime" />
        <NumberInput label="serviceItemsTotal" source="serviceItemsTotal" />
        <NumberInput step={1} label="setPostingTime" source="setPostingTime" />
        <NumberInput label="stockItemsTotal" source="stockItemsTotal" />
        <TextInput label="targetAsset" source="targetAsset" />
        <TextInput label="targetAssetLocation" source="targetAssetLocation" />
        <TextInput label="targetAssetName" source="targetAssetName" />
        <TextInput label="targetBatchNo" source="targetBatchNo" />
        <TextInput
          label="targetFixedAssetAccount"
          source="targetFixedAssetAccount"
        />
        <NumberInput
          step={1}
          label="targetHasBatchNo"
          source="targetHasBatchNo"
        />
        <NumberInput
          step={1}
          label="targetHasSerialNo"
          source="targetHasSerialNo"
        />
        <NumberInput label="targetIncomingRate" source="targetIncomingRate" />
        <NumberInput
          step={1}
          label="targetIsFixedAsset"
          source="targetIsFixedAsset"
        />
        <TextInput label="targetItemCode" source="targetItemCode" />
        <TextInput label="targetItemName" source="targetItemName" />
        <NumberInput label="targetQty" source="targetQty" />
        <TextInput label="targetSerialNo" multiline source="targetSerialNo" />
        <TextInput label="targetStockUom" source="targetStockUom" />
        <TextInput label="targetWarehouse" source="targetWarehouse" />
        <TextInput label="title" source="title" />
        <NumberInput label="totalValue" source="totalValue" />
      </SimpleForm>
    </Create>
  );
};
