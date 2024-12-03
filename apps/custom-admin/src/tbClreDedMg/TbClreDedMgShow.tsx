import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const TbClreDedMgShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="mg_ac_no" source="mgAcNo" />
        <TextField label="mg_tp_cd" source="mgTpCd" />
        <TextField label="reff_no" source="reffNo" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
