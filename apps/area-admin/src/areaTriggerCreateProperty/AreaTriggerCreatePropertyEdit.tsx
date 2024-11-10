import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const AreaTriggerCreatePropertyEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="AnimId" source="animId" />
        <NumberInput step={1} label="AnimKitId" source="animKitId" />
        <NumberInput step={1} label="AreaTriggerId" source="areaTriggerId" />
        <NumberInput
          step={1}
          label="DecalPropertiesId"
          source="decalPropertiesId"
        />
        <NumberInput step={1} label="FacingCurveId" source="facingCurveId" />
        <NumberInput step={1} label="Flags" source="flags" />
        <BooleanInput
          label="IsAreatriggerCustom"
          source="isAreatriggerCustom"
        />
        <BooleanInput label="IsCustom" source="isCustom" />
        <NumberInput step={1} label="MorphCurveId" source="morphCurveId" />
        <NumberInput step={1} label="MoveCurveId" source="moveCurveId" />
        <NumberInput step={1} label="ScaleCurveId" source="scaleCurveId" />
        <TextInput label="ScriptName" source="scriptName" />
        <NumberInput step={1} label="Shape" source="shape" />
        <NumberInput label="ShapeData0" source="shapeData0" />
        <NumberInput label="ShapeData1" source="shapeData1" />
        <NumberInput label="ShapeData2" source="shapeData2" />
        <NumberInput label="ShapeData3" source="shapeData3" />
        <NumberInput label="ShapeData4" source="shapeData4" />
        <NumberInput label="ShapeData5" source="shapeData5" />
        <NumberInput label="ShapeData6" source="shapeData6" />
        <NumberInput label="ShapeData7" source="shapeData7" />
        <NumberInput step={1} label="TimeToTarget" source="timeToTarget" />
        <NumberInput
          step={1}
          label="TimeToTargetScale"
          source="timeToTargetScale"
        />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
      </SimpleForm>
    </Edit>
  );
};
