import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const TbClreDedCoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="dcer_addr" source="dcerAddr" />
        <TextInput label="dcer_co_nm" source="dcerCoNm" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="exppn_addr" source="exppnAddr" />
        <TextInput label="exppn_co_nm" source="exppnCoNm" />
        <TextInput label="exppn_eml" source="exppnEml" type="email" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextInput label="imppn_addr" source="imppnAddr" />
        <TextInput label="imppn_co_nm" source="imppnCoNm" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextInput label="reff_no" source="reffNo" />
        <TextInput label="txpr_addr" source="txprAddr" />
        <TextInput label="txpr_co_nm" source="txprCoNm" />
        <TextInput label="txpr_eml" source="txprEml" type="email" />
        <TextInput label="txpr_tlph_no" source="txprTlphNo" />
      </SimpleForm>
    </Create>
  );
};
