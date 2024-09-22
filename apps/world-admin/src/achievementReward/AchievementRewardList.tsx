import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AchievementRewardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AchievementRewards"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="ItemID" source="itemId" />
        <TextField label="MailTemplateID" source="mailTemplateId" />
        <TextField label="Sender" source="sender" />
        <TextField label="Subject" source="subject" />
        <TextField label="TitleA" source="titleA" />
        <TextField label="TitleH" source="titleH" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
