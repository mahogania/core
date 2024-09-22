import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const AreaTriggerCreatePropertyShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AnimId" source="animId" />
        <TextField label="AnimKitId" source="animKitId" />
        <TextField label="AreaTriggerId" source="areaTriggerId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DecalPropertiesId" source="decalPropertiesId" />
        <TextField label="FacingCurveId" source="facingCurveId" />
        <TextField label="Flags" source="flags" />
        <TextField label="ID" source="id" />
        <BooleanField
          label="IsAreatriggerCustom"
          source="isAreatriggerCustom"
        />
        <BooleanField label="IsCustom" source="isCustom" />
        <TextField label="MorphCurveId" source="morphCurveId" />
        <TextField label="MoveCurveId" source="moveCurveId" />
        <TextField label="ScaleCurveId" source="scaleCurveId" />
        <TextField label="ScriptName" source="scriptName" />
        <TextField label="Shape" source="shape" />
        <TextField label="ShapeData0" source="shapeData0" />
        <TextField label="ShapeData1" source="shapeData1" />
        <TextField label="ShapeData2" source="shapeData2" />
        <TextField label="ShapeData3" source="shapeData3" />
        <TextField label="ShapeData4" source="shapeData4" />
        <TextField label="ShapeData5" source="shapeData5" />
        <TextField label="ShapeData6" source="shapeData6" />
        <TextField label="ShapeData7" source="shapeData7" />
        <TextField label="TimeToTarget" source="timeToTarget" />
        <TextField label="TimeToTargetScale" source="timeToTargetScale" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />
      </SimpleShowLayout>
    </Show>
  );
};
