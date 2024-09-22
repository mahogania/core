import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CreatureImmunitiesShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Auras" source="auras" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DispelTypeMask" source="dispelTypeMask" />
        <TextField label="Effects" source="effects" />
        <TextField label="ID" source="id" />
        <TextField label="ImmuneAoE" source="immuneAoE" />
        <TextField label="ImmuneChain" source="immuneChain" />
        <TextField label="MechanicsMask" source="mechanicsMask" />
        <TextField label="SchoolMask" source="schoolMask" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
