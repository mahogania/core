import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AssetCapitalizationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField label="assetItemsTotal" source="assetItemsTotal" />
        <TextField label="capitalizationMethod" source="capitalizationMethod" />
        <TextField label="company" source="company" />
        <TextField label="costCenter" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="entryType" source="entryType" />
        <TextField label="financeBook" source="financeBook" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="namingSeries" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="postingDate" source="postingDate" />
        <TextField label="postingTime" source="postingTime" />
        <TextField label="serviceItemsTotal" source="serviceItemsTotal" />
        <TextField label="setPostingTime" source="setPostingTime" />
        <TextField label="stockItemsTotal" source="stockItemsTotal" />
        <TextField label="targetAsset" source="targetAsset" />
        <TextField label="targetAssetLocation" source="targetAssetLocation" />
        <TextField label="targetAssetName" source="targetAssetName" />
        <TextField label="targetBatchNo" source="targetBatchNo" />
        <TextField
          label="targetFixedAssetAccount"
          source="targetFixedAssetAccount"
        />
        <TextField label="targetHasBatchNo" source="targetHasBatchNo" />
        <TextField label="targetHasSerialNo" source="targetHasSerialNo" />
        <TextField label="targetIncomingRate" source="targetIncomingRate" />
        <TextField label="targetIsFixedAsset" source="targetIsFixedAsset" />
        <TextField label="targetItemCode" source="targetItemCode" />
        <TextField label="targetItemName" source="targetItemName" />
        <TextField label="targetQty" source="targetQty" />
        <TextField label="targetSerialNo" source="targetSerialNo" />
        <TextField label="targetStockUom" source="targetStockUom" />
        <TextField label="targetWarehouse" source="targetWarehouse" />
        <TextField label="title" source="title" />
        <TextField label="totalValue" source="totalValue" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
