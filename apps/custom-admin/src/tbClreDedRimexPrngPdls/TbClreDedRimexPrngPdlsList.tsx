import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TbClreDedRimexPrngPdlsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TbClreDedRimexPrngPdlsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
