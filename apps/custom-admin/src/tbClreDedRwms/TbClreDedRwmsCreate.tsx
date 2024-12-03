import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const TbClreDedRwmsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bf_cmdt_clsf_spel_cd" source="bfCmdtClsfSpelCd" />
        <TextInput label="bf_dtl_dcsh_no" source="bfDtlDcshNo" />
        <TextInput label="bf_hs_cd" source="bfHsCd" />
        <TextInput label="bf_pdls_no" source="bfPdlsNo" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="divd_ffmn_tp_cd" source="divdFfmnTpCd" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <NumberInput label="ntwg" source="ntwg" />
        <TextInput label="pdls_no" source="pdlsNo" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="qty_ut_cd" source="qtyUtCd" />
        <TextInput label="reff_no" source="reffNo" />
        <NumberInput step={1} label="rwms_srno" source="rwmsSrno" />
      </SimpleForm>
    </Create>
  );
};
