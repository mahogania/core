import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ConditionsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comment" source="comment" />
        <TextInput
          label="ConditionStringValue1"
          source="conditionStringValue1"
        />
        <NumberInput
          step={1}
          label="ConditionTarget"
          source="conditionTarget"
        />
        <NumberInput
          step={1}
          label="ConditionTypeOrReference"
          source="conditionTypeOrReference"
        />
        <NumberInput
          step={1}
          label="ConditionValue1"
          source="conditionValue1"
        />
        <NumberInput
          step={1}
          label="ConditionValue2"
          source="conditionValue2"
        />
        <NumberInput
          step={1}
          label="ConditionValue3"
          source="conditionValue3"
        />
        <NumberInput step={1} label="ElseGroup" source="elseGroup" />
        <NumberInput step={1} label="ErrorTextId" source="errorTextId" />
        <NumberInput step={1} label="ErrorType" source="errorType" />
        <NumberInput
          step={1}
          label="NegativeCondition"
          source="negativeCondition"
        />
        <TextInput label="ScriptName" source="scriptName" />
        <NumberInput step={1} label="SourceEntry" source="sourceEntry" />
        <NumberInput step={1} label="SourceGroup" source="sourceGroup" />
        <NumberInput step={1} label="SourceId" source="sourceId" />
        <NumberInput
          step={1}
          label="SourceTypeOrReferenceId"
          source="sourceTypeOrReferenceId"
        />
      </SimpleForm>
    </Create>
  );
};
