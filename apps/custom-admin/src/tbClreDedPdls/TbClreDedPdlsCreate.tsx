import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TbClreDedPdlsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="adit_tx_qty" source="aditTxQty" />
        <TextInput label="adit_tx_qty_ut_cd" source="aditTxQtyUtCd" />
        <TextInput label="apc_atpm_end_dt" source="apcAtpmEndDt" />
        <TextInput label="apc_atpm_strt_dt" source="apcAtpmStrtDt" />
        <TextInput label="apc_cd" source="apcCd" />
        <TextInput label="bf_dtl_dcsh_dt" source="bfDtlDcshDt" />
        <TextInput label="bf_dtl_dcsh_no" source="bfDtlDcshNo" />
        <TextInput label="bf_pdls_no" source="bfPdlsNo" />
        <TextInput label="brnd_nm" source="brndNm" />
        <TextInput label="cmdt_clsf_spel_cd" source="cmdtClsfSpelCd" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="divd_ffmn_tp_cd" source="divdFfmnTpCd" />
        <TextInput label="dlng_pdls_nm" source="dlngPdlsNm" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextInput label="hs_cd" source="hsCd" />
        <TextInput label="hs_err_pvnt_val" source="hsErrPvntVal" />
        <TextInput label="hs_excp_mtr_cd" source="hsExcpMtrCd" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextInput label="mg_dscn_apre_no" source="mgDscnApreNo" />
        <TextInput label="nwpr_scar_cmdt_cd" source="nwprScarCmdtCd" />
        <TextInput label="oil_tank_no" source="oilTankNo" />
        <TextInput label="orcy_cnty_cd" source="orcyCntyCd" />
        <TextInput label="pckg_desc" source="pckgDesc" />
        <TextInput label="pckg_shmr_mark_no" source="pckgShmrMarkNo" />
        <TextInput label="pdls_clsf_bfhn_jdgn_pn" source="pdlsClsfBfhnJdgnPn" />
        <TextInput label="pdls_nm" source="pdlsNm" />
        <TextInput label="pdls_no" source="pdlsNo" />
        <NumberInput label="pdls_ntwg" source="pdlsNtwg" />
        <NumberInput step={1} label="pdls_pckg_gcnt" source="pdlsPckgGcnt" />
        <TextInput label="pdls_pckg_ut_cd" source="pdlsPckgUtCd" />
        <NumberInput label="pdls_ttwg" source="pdlsTtwg" />
        <TextInput label="prc_dtrm_mean_cd" source="prcDtrmMeanCd" />
        <TextInput label="prhb_cmdt_cd" source="prhbCmdtCd" />
        <TextInput label="prvl_cd" source="prvlCd" />
        <NumberInput
          step={1}
          label="psmgt_ffmn_xpir_prid"
          source="psmgtFfmnXpirPrid"
        />
        <TextInput label="qta_apre_no" source="qtaApreNo" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="qty_ut_cd" source="qtyUtCd" />
        <TextInput label="reff_no" source="reffNo" />
        <TextInput label="regm_rqst_cd" source="regmRqstCd" />
        <TextInput label="trif_base_val" source="trifBaseVal" />
        <TextInput label="upr_pdls_no" source="uprPdlsNo" />
        <TextInput label="vhcl_yn" source="vhclYn" />
      </SimpleForm>
    </Create>
  );
};
