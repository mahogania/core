import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const BomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="allowAlternativeItem"
          source="allowAlternativeItem"
        />
        <TextInput label="amendedFrom" source="amendedFrom" />
        <NumberInput label="baseOperatingCost" source="baseOperatingCost" />
        <NumberInput label="baseRawMaterialCost" source="baseRawMaterialCost" />
        <NumberInput
          label="baseScrapMaterialCost"
          source="baseScrapMaterialCost"
        />
        <NumberInput label="baseTotalCost" source="baseTotalCost" />
        <TextInput label="bomCreator" source="bomCreator" />
        <TextInput label="bomCreatorItem" source="bomCreatorItem" />
        <TextInput label="buyingPriceList" source="buyingPriceList" />
        <TextInput label="company" source="company" />
        <NumberInput label="conversionRate" source="conversionRate" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="currency" source="currency" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <BooleanInput
          label="fgBasedOperatingCost"
          source="fgBasedOperatingCost"
        />
        <BooleanInput label="hasVariants" source="hasVariants" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <BooleanInput label="inspectionRequired" source="inspectionRequired" />
        <BooleanInput label="isActive" source="isActive" />
        <BooleanInput label="isDefault" source="isDefault" />
        <TextInput label="item" source="item" />
        <TextInput label="itemName" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="operatingCost" source="operatingCost" />
        <NumberInput
          label="operatingCostPerBomQuantity"
          source="operatingCostPerBomQuantity"
        />
        <TextInput label="owner" source="owner" />
        <NumberInput label="plcConversionRate" source="plcConversionRate" />
        <TextInput label="priceListCurrency" source="priceListCurrency" />
        <NumberInput
          label="processLossPercentage"
          source="processLossPercentage"
        />
        <NumberInput label="processLossQty" source="processLossQty" />
        <TextInput label="project" source="project" />
        <TextInput
          label="qualityInspectionTemplate"
          source="qualityInspectionTemplate"
        />
        <NumberInput label="quantity" source="quantity" />
        <NumberInput label="rawMaterialCost" source="rawMaterialCost" />
        <TextInput label="rmCostAsPer" source="rmCostAsPer" />
        <TextInput label="route" multiline source="route" />
        <TextInput label="routing" source="routing" />
        <NumberInput label="scrapMaterialCost" source="scrapMaterialCost" />
        <BooleanInput
          label="setRateOfSubAssemblyItemBasedOnBom"
          source="setRateOfSubAssemblyItemBasedOnBom"
        />
        <BooleanInput label="showInWebsite" source="showInWebsite" />
        <BooleanInput label="showItems" source="showItems" />
        <BooleanInput label="showOperations" source="showOperations" />
        <TextInput label="thumbnail" source="thumbnail" />
        <NumberInput label="totalCost" source="totalCost" />
        <TextInput
          label="transferMaterialAgainst"
          source="transferMaterialAgainst"
        />
        <TextInput label="uom" source="uom" />
        <TextInput
          label="webLongDescription"
          multiline
          source="webLongDescription"
        />
        <TextInput label="websiteImage" multiline source="websiteImage" />
        <BooleanInput label="withOperations" source="withOperations" />
      </SimpleForm>
    </Create>
  );
};
