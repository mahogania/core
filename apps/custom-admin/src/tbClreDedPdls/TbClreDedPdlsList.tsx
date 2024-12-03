import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TbClreDedPdlsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TbClreDedPdlsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="adit_tx_qty" source="aditTxQty" />
        <TextField label="adit_tx_qty_ut_cd" source="aditTxQtyUtCd" />
        <TextField label="apc_atpm_end_dt" source="apcAtpmEndDt" />
        <TextField label="apc_atpm_strt_dt" source="apcAtpmStrtDt" />
        <TextField label="apc_cd" source="apcCd" />
        <TextField label="bf_dtl_dcsh_dt" source="bfDtlDcshDt" />
        <TextField label="bf_dtl_dcsh_no" source="bfDtlDcshNo" />
        <TextField label="bf_pdls_no" source="bfPdlsNo" />
        <TextField label="brnd_nm" source="brndNm" />
        <TextField label="cmdt_clsf_spel_cd" source="cmdtClsfSpelCd" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="divd_ffmn_tp_cd" source="divdFfmnTpCd" />
        <TextField label="dlng_pdls_nm" source="dlngPdlsNm" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="hs_cd" source="hsCd" />
        <TextField label="hs_err_pvnt_val" source="hsErrPvntVal" />
        <TextField label="hs_excp_mtr_cd" source="hsExcpMtrCd" />
        <TextField label="ID" source="id" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="mg_dscn_apre_no" source="mgDscnApreNo" />
        <TextField label="nwpr_scar_cmdt_cd" source="nwprScarCmdtCd" />
        <TextField label="oil_tank_no" source="oilTankNo" />
        <TextField label="orcy_cnty_cd" source="orcyCntyCd" />
        <TextField label="pckg_desc" source="pckgDesc" />
        <TextField label="pckg_shmr_mark_no" source="pckgShmrMarkNo" />
        <TextField label="pdls_clsf_bfhn_jdgn_pn" source="pdlsClsfBfhnJdgnPn" />
        <TextField label="pdls_nm" source="pdlsNm" />
        <TextField label="pdls_no" source="pdlsNo" />
        <TextField label="pdls_ntwg" source="pdlsNtwg" />
        <TextField label="pdls_pckg_gcnt" source="pdlsPckgGcnt" />
        <TextField label="pdls_pckg_ut_cd" source="pdlsPckgUtCd" />
        <TextField label="pdls_ttwg" source="pdlsTtwg" />
        <TextField label="prc_dtrm_mean_cd" source="prcDtrmMeanCd" />
        <TextField label="prhb_cmdt_cd" source="prhbCmdtCd" />
        <TextField label="prvl_cd" source="prvlCd" />
        <TextField label="psmgt_ffmn_xpir_prid" source="psmgtFfmnXpirPrid" />
        <TextField label="qta_apre_no" source="qtaApreNo" />
        <TextField label="qty" source="qty" />
        <TextField label="qty_ut_cd" source="qtyUtCd" />
        <TextField label="reff_no" source="reffNo" />
        <TextField label="regm_rqst_cd" source="regmRqstCd" />
        <TextField label="trif_base_val" source="trifBaseVal" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="upr_pdls_no" source="uprPdlsNo" />
        <TextField label="vhcl_yn" source="vhclYn" />{" "}
      </Datagrid>
    </List>
  );
};
