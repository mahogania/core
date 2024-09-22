import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CreatureImmunitiesEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
