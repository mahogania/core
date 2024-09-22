import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const CreatureAddonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="aiAnimKit" source="aiAnimKit" />
        <NumberInput step={1} label="AnimTier" source="animTier" />
        <TextInput label="auras" multiline source="auras" />
        <NumberInput step={1} label="emote" source="emote" />
        <NumberInput label="guid" source="guid" />
        <NumberInput step={1} label="meleeAnimKit" source="meleeAnimKit" />
        <NumberInput step={1} label="mount" source="mount" />
        <NumberInput
          step={1}
          label="MountCreatureID"
          source="mountCreatureId"
        />
        <NumberInput
          step={1}
          label="movementAnimKit"
          source="movementAnimKit"
        />
        <NumberInput step={1} label="PathId" source="pathId" />
        <NumberInput step={1} label="PvPFlags" source="pvPFlags" />
        <NumberInput step={1} label="SheathState" source="sheathState" />
        <NumberInput step={1} label="StandState" source="standState" />
        <NumberInput step={1} label="VisFlags" source="visFlags" />
        <NumberInput
          step={1}
          label="visibilityDistanceType"
          source="visibilityDistanceType"
        />
      </SimpleForm>
    </Create>
  );
};
