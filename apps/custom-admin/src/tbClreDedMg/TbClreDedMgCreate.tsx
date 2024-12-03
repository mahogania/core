import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const TbClreDedMgCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextInput label="mg_ac_no" source="mgAcNo" />
        <TextInput label="mg_tp_cd" source="mgTpCd" />
        <TextInput label="reff_no" source="reffNo" />
      </SimpleForm>
    </Create>
  );
};
