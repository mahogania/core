import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="additionalAssetCost" source="additionalAssetCost" />
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="assetCategory" source="assetCategory" />
        <TextInput label="assetName" source="assetName" />
        <TextInput label="assetOwner" source="assetOwner" />
        <TextInput label="assetOwnerCompany" source="assetOwnerCompany" />
        <NumberInput step={1} label="assetQuantity" source="assetQuantity" />
        <DateTimeInput
          label="availableForUseDate"
          source="availableForUseDate"
        />
        <NumberInput
          step={1}
          label="bookedFixedAsset"
          source="bookedFixedAsset"
        />
        <NumberInput
          step={1}
          label="calculateDepreciation"
          source="calculateDepreciation"
        />
        <TextInput label="company" source="company" />
        <TextInput
          label="comprehensiveInsurance"
          source="comprehensiveInsurance"
        />
        <TextInput label="costCenter" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="custodian" source="custodian" />
        <TextInput label="customer" source="customer" />
        <TextInput label="defaultFinanceBook" source="defaultFinanceBook" />
        <TextInput label="department" source="department" />
        <TextInput
          label="deprEntryPostingStatus"
          source="deprEntryPostingStatus"
        />
        <TextInput label="depreciationMethod" source="depreciationMethod" />
        <DateTimeInput label="disposalDate" source="disposalDate" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput
          step={1}
          label="frequencyOfDepreciation"
          source="frequencyOfDepreciation"
        />
        <NumberInput label="grossPurchaseAmount" source="grossPurchaseAmount" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <DateTimeInput label="insuranceEndDate" source="insuranceEndDate" />
        <DateTimeInput label="insuranceStartDate" source="insuranceStartDate" />
        <TextInput label="insuredValue" source="insuredValue" />
        <TextInput label="insurer" source="insurer" />
        <NumberInput
          step={1}
          label="isCompositeAsset"
          source="isCompositeAsset"
        />
        <NumberInput
          step={1}
          label="isExistingAsset"
          source="isExistingAsset"
        />
        <NumberInput
          step={1}
          label="isFullyDepreciated"
          source="isFullyDepreciated"
        />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="itemName" source="itemName" />
        <TextInput label="journalEntryForScrap" source="journalEntryForScrap" />
        <TextInput label="location" source="location" />
        <NumberInput
          step={1}
          label="maintenanceRequired"
          source="maintenanceRequired"
        />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="namingSeries" source="namingSeries" />
        <DateTimeInput
          label="nextDepreciationDate"
          source="nextDepreciationDate"
        />
        <NumberInput
          label="openingAccumulatedDepreciation"
          source="openingAccumulatedDepreciation"
        />
        <NumberInput
          step={1}
          label="openingNumberOfBookedDepreciations"
          source="openingNumberOfBookedDepreciations"
        />
        <TextInput label="owner" source="owner" />
        <TextInput label="policyNumber" source="policyNumber" />
        <NumberInput label="purchaseAmount" source="purchaseAmount" />
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
        <TextInput label="purchaseInvoice" source="purchaseInvoice" />
        <TextInput label="purchaseInvoiceItem" source="purchaseInvoiceItem" />
        <TextInput label="purchaseReceipt" source="purchaseReceipt" />
        <TextInput label="purchaseReceiptItem" source="purchaseReceiptItem" />
        <TextInput label="splitFrom" source="splitFrom" />
        <TextInput label="status" source="status" />
        <TextInput label="supplier" source="supplier" />
        <NumberInput label="totalAssetCost" source="totalAssetCost" />
        <NumberInput
          step={1}
          label="totalNumberOfDepreciations"
          source="totalNumberOfDepreciations"
        />
        <NumberInput
          label="valueAfterDepreciation"
          source="valueAfterDepreciation"
        />
      </SimpleForm>
    </Edit>
  );
};
