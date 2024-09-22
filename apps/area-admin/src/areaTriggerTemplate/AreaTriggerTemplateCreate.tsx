import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const AreaTriggerTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Flags" source="flags" />
        <BooleanInput label="IsCustom" source="isCustom" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
      </SimpleForm>
    </Create>
  );
};
