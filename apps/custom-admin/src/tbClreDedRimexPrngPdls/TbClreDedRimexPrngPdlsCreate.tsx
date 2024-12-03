import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const TbClreDedRimexPrngPdlsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cmdt_clsf_spel_cd" source="cmdtClsfSpelCd" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="dlng_pdls_nm" source="dlngPdlsNm" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextInput label="hs_cd" source="hsCd" />
        <TextInput label="hs_err_pvnt_val" source="hsErrPvntVal" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextInput label="orcy_cnty_cd" source="orcyCntyCd" />
        <TextInput label="pdls_nm" source="pdlsNm" />
        <NumberInput label="pdls_ntwg" source="pdlsNtwg" />
        <NumberInput label="pdls_ttwg" source="pdlsTtwg" />
        <TextInput label="prng_pdls_no" source="prngPdlsNo" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="qty_ut_cd" source="qtyUtCd" />
        <TextInput label="reff_no" source="reffNo" />
      </SimpleForm>
    </Create>
  );
};
