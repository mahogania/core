import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const CreatureQuestCurrencyEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="CreatureId" source="creatureId" />
        <NumberInput step={1} label="CurrencyId" source="currencyId" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
      </SimpleForm>
    </Edit>
  );
};
