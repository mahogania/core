import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LinkedRespawnTitle } from "../linkedRespawn/LinkedRespawnTitle";

export const InstanceTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="linkedRespawns.id"
          reference="LinkedRespawn"
          label="Linked Respawns"
        >
          <SelectInput optionText={LinkedRespawnTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
