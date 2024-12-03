import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssetList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Assets"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="additionalAssetCost" source="additionalAssetCost" />
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField label="assetCategory" source="assetCategory" />
        <TextField label="assetName" source="assetName" />
        <TextField label="assetOwner" source="assetOwner" />
        <TextField label="assetOwnerCompany" source="assetOwnerCompany" />
        <TextField label="assetQuantity" source="assetQuantity" />
        <TextField label="availableForUseDate" source="availableForUseDate" />
        <TextField label="bookedFixedAsset" source="bookedFixedAsset" />
        <TextField
          label="calculateDepreciation"
          source="calculateDepreciation"
        />
        <TextField label="company" source="company" />
        <TextField
          label="comprehensiveInsurance"
          source="comprehensiveInsurance"
        />
        <TextField label="costCenter" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="custodian" source="custodian" />
        <TextField label="customer" source="customer" />
        <TextField label="defaultFinanceBook" source="defaultFinanceBook" />
        <TextField label="department" source="department" />
        <TextField
          label="deprEntryPostingStatus"
          source="deprEntryPostingStatus"
        />
        <TextField label="depreciationMethod" source="depreciationMethod" />
        <TextField label="disposalDate" source="disposalDate" />
        <TextField label="docstatus" source="docstatus" />
        <TextField
          label="frequencyOfDepreciation"
          source="frequencyOfDepreciation"
        />
        <TextField label="grossPurchaseAmount" source="grossPurchaseAmount" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="insuranceEndDate" source="insuranceEndDate" />
        <TextField label="insuranceStartDate" source="insuranceStartDate" />
        <TextField label="insuredValue" source="insuredValue" />
        <TextField label="insurer" source="insurer" />
        <TextField label="isCompositeAsset" source="isCompositeAsset" />
        <TextField label="isExistingAsset" source="isExistingAsset" />
        <TextField label="isFullyDepreciated" source="isFullyDepreciated" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemName" source="itemName" />
        <TextField label="journalEntryForScrap" source="journalEntryForScrap" />
        <TextField label="location" source="location" />
        <TextField label="maintenanceRequired" source="maintenanceRequired" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="namingSeries" source="namingSeries" />
        <TextField label="nextDepreciationDate" source="nextDepreciationDate" />
        <TextField
          label="openingAccumulatedDepreciation"
          source="openingAccumulatedDepreciation"
        />
        <TextField
          label="openingNumberOfBookedDepreciations"
          source="openingNumberOfBookedDepreciations"
        />
        <TextField label="owner" source="owner" />
        <TextField label="policyNumber" source="policyNumber" />
        <TextField label="purchaseAmount" source="purchaseAmount" />
        <TextField label="purchaseDate" source="purchaseDate" />
        <TextField label="purchaseInvoice" source="purchaseInvoice" />
        <TextField label="purchaseInvoiceItem" source="purchaseInvoiceItem" />
        <TextField label="purchaseReceipt" source="purchaseReceipt" />
        <TextField label="purchaseReceiptItem" source="purchaseReceiptItem" />
        <TextField label="splitFrom" source="splitFrom" />
        <TextField label="status" source="status" />
        <TextField label="supplier" source="supplier" />
        <TextField label="totalAssetCost" source="totalAssetCost" />
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
