import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const GameEventNpcVendorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="BonusListIDs" multiline source="bonusListIDs" />
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput step={1} label="ExtendedCost" source="extendedCost" />
        <NumberInput step={1} label="guid" source="guid" />
        <NumberInput
          step={1}
          label="IgnoreFiltering"
          source="ignoreFiltering"
        />
        <NumberInput step={1} label="incrtime" source="incrtime" />
        <NumberInput step={1} label="item" source="item" />
        <NumberInput step={1} label="maxcount" source="maxcount" />
        <NumberInput
          step={1}
          label="PlayerConditionID"
          source="playerConditionId"
        />
        <NumberInput step={1} label="slot" source="slot" />
        <NumberInput step={1} label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
