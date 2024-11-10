import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const InventoryDimensionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="ApplyToAllDoctypes"
          source="applyToAllDoctypes"
        />
        <TextInput label="Condition" multiline source="condition" />
        <DateTimeInput label="Creation" source="creation" />
        <TextInput label="DimensionName" source="dimensionName" />
        <NumberInput step={1} label="Disabled" source="disabled" />
        <NumberInput step={1} label="Docstatus" source="docstatus" />
        <TextInput label="DocumentType" source="documentType" />
        <TextInput label="FetchFromParent" source="fetchFromParent" />
        <NumberInput step={1} label="Idx" source="idx" />
        <NumberInput step={1} label="Isttable" source="isttable" />
        <TextInput
          label="MandatoryDependsOn"
          multiline
          source="mandatoryDependsOn"
        />
        <DateTimeInput label="Modified" source="modified" />
        <TextInput label="ModifiedBy" source="modifiedBy" />
        <TextInput label="Name" source="name" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="ReferenceDocument" source="referenceDocument" />
        <NumberInput step={1} label="Reqd" source="reqd" />
        <TextInput label="SourceFieldname" source="sourceFieldname" />
        <TextInput label="TargetFieldname" source="targetFieldname" />
        <TextInput label="TypeOfTransaction" source="typeOfTransaction" />
        <NumberInput
          step={1}
          label="ValidateNegativeStock"
          source="validateNegativeStock"
        />
      </SimpleForm>
    </Edit>
  );
};
