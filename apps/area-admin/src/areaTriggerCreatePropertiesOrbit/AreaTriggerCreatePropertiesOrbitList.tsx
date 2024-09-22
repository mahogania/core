import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AreaTriggerCreatePropertiesOrbitList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AreaTriggerCreatePropertiesOrbits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="AreaTriggerCreatePropertiesId"
          source="areaTriggerCreatePropertiesId"
        />
        <TextField label="BlendFromRadius" source="blendFromRadius" />
        <BooleanField label="CanLoop" source="canLoop" />
        <TextField label="CircleRadius" source="circleRadius" />
        <BooleanField label="CounterClockwise" source="counterClockwise" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="InitialAngle" source="initialAngle" />
        <BooleanField label="IsCustom" source="isCustom" />
        <TextField label="StartDelay" source="startDelay" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />
        <TextField label="ZOffset" source="zOffset" />{" "}
      </Datagrid>
    </List>
  );
};
