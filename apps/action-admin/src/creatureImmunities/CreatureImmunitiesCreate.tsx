import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CreatureImmunitiesCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Auras" multiline source="auras" />
        <TextInput label="Comment" multiline source="comment" />
        <NumberInput step={1} label="DispelTypeMask" source="dispelTypeMask" />
        <TextInput label="Effects" multiline source="effects" />
        <NumberInput step={1} label="ImmuneAoE" source="immuneAoE" />
        <NumberInput step={1} label="ImmuneChain" source="immuneChain" />
        <NumberInput label="MechanicsMask" source="mechanicsMask" />
        <NumberInput step={1} label="SchoolMask" source="schoolMask" />
      </SimpleForm>
    </Create>
  );
};
