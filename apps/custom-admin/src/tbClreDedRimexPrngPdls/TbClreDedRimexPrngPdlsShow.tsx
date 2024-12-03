import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TbClreDedRimexPrngPdlsShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cmdt_clsf_spel_cd" source="cmdtClsfSpelCd" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="dlng_pdls_nm" source="dlngPdlsNm" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="hs_cd" source="hsCd" />
        <TextField label="hs_err_pvnt_val" source="hsErrPvntVal" />
        <TextField label="ID" source="id" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="orcy_cnty_cd" source="orcyCntyCd" />
        <TextField label="pdls_nm" source="pdlsNm" />
        <TextField label="pdls_ntwg" source="pdlsNtwg" />
        <TextField label="pdls_ttwg" source="pdlsTtwg" />
        <TextField label="prng_pdls_no" source="prngPdlsNo" />
        <TextField label="qty" source="qty" />
        <TextField label="qty_ut_cd" source="qtyUtCd" />
        <TextField label="reff_no" source="reffNo" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
