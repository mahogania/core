import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { CraftLevelStatTitle } from "../craftLevelStat/CraftLevelStatTitle";
import { PlayerCraftTitle } from "../playerCraft/PlayerCraftTitle";

export const CraftCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="craftLevelStats"
          reference="CraftLevelStat"
        >
          <SelectArrayInput
            optionText={CraftLevelStatTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="playerCrafts" reference="PlayerCraft">
          <SelectArrayInput
            optionText={PlayerCraftTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
