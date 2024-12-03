import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LinkedRespawnTitle } from "../linkedRespawn/LinkedRespawnTitle";

export const InstanceTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="linkedRespawns.id"
          reference="LinkedRespawn"
          label="Linked Respawns"
        >
          <SelectInput optionText={LinkedRespawnTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
