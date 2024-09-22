import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AreaTriggerTemplateActionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AreaTriggerTemplateActions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ActionParam" source="actionParam" />
        <TextField label="ActionType" source="actionType" />
        <TextField label="AreaTriggerId" source="areaTriggerId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsCustom" source="isCustom" />
        <TextField label="TargetType" source="targetType" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
