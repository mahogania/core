import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BomList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"BOMS"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField
          label="allowAlternativeItem"
          source="allowAlternativeItem"
        />
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField label="baseOperatingCost" source="baseOperatingCost" />
        <TextField label="baseRawMaterialCost" source="baseRawMaterialCost" />
        <TextField
          label="baseScrapMaterialCost"
          source="baseScrapMaterialCost"
        />
        <TextField label="baseTotalCost" source="baseTotalCost" />
        <TextField label="bomCreator" source="bomCreator" />
        <TextField label="bomCreatorItem" source="bomCreatorItem" />
        <TextField label="buyingPriceList" source="buyingPriceList" />
        <TextField label="company" source="company" />
        <TextField label="conversionRate" source="conversionRate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currency" source="currency" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <BooleanField
          label="fgBasedOperatingCost"
          source="fgBasedOperatingCost"
        />
        <BooleanField label="hasVariants" source="hasVariants" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <BooleanField label="inspectionRequired" source="inspectionRequired" />
        <BooleanField label="isActive" source="isActive" />
        <BooleanField label="isDefault" source="isDefault" />
        <TextField label="item" source="item" />
        <TextField label="itemName" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="operatingCost" source="operatingCost" />
        <TextField
          label="operatingCostPerBomQuantity"
          source="operatingCostPerBomQuantity"
        />
        <TextField label="owner" source="owner" />
        <TextField label="plcConversionRate" source="plcConversionRate" />
        <TextField label="priceListCurrency" source="priceListCurrency" />
        <TextField
          label="processLossPercentage"
          source="processLossPercentage"
        />
        <TextField label="processLossQty" source="processLossQty" />
        <TextField label="project" source="project" />
        <TextField
          label="qualityInspectionTemplate"
          source="qualityInspectionTemplate"
        />
        <TextField label="quantity" source="quantity" />
        <TextField label="rawMaterialCost" source="rawMaterialCost" />
        <TextField label="rmCostAsPer" source="rmCostAsPer" />
        <TextField label="route" source="route" />
        <TextField label="routing" source="routing" />
        <TextField label="scrapMaterialCost" source="scrapMaterialCost" />
        <BooleanField
          label="setRateOfSubAssemblyItemBasedOnBom"
          source="setRateOfSubAssemblyItemBasedOnBom"
        />
        <BooleanField label="showInWebsite" source="showInWebsite" />
        <BooleanField label="showItems" source="showItems" />
        <BooleanField label="showOperations" source="showOperations" />
        <TextField label="thumbnail" source="thumbnail" />
        <TextField label="totalCost" source="totalCost" />
        <TextField
          label="transferMaterialAgainst"
          source="transferMaterialAgainst"
        />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="webLongDescription" source="webLongDescription" />
        <TextField label="websiteImage" source="websiteImage" />
        <BooleanField label="withOperations" source="withOperations" />{" "}
      </Datagrid>
    </List>
  );
};
