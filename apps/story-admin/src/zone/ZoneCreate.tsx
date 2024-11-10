import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AreaTitle } from "../area/AreaTitle";
import { MapTitle } from "../map/MapTitle";

export const ZoneCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="areas" reference="Area">
          <SelectArrayInput
            optionText={AreaTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="map.id" reference="Map" label="Map">
          <SelectInput optionText={MapTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
