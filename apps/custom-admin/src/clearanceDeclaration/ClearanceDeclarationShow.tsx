import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ClearanceDeclarationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="aditTxQty" source="aditTxQty" />
        <TextField label="aditTxQtyUtCd" source="aditTxQtyUtCd" />
        <TextField label="al_ntwg" source="alNtwg" />
        <TextField label="al_ttwg" source="alTtwg" />
        <TextField label="apcAtpmEndDt" source="apcAtpmEndDt" />
        <TextField label="apcAtpmStrtDt" source="apcAtpmStrtDt" />
        <TextField label="apcCd" source="apcCd" />
        <TextField label="arvl_dt" source="arvlDt" />
        <TextField label="bf_bnbn_cmdt_wrhs_cd" source="bfBnbnCmdtWrhsCd" />
        <TextField label="bfDtlDcshDt" source="bfDtlDcshDt" />
        <TextField label="bfDtlDcshNo" source="bfDtlDcshNo" />
        <TextField label="bfPdlsNo" source="bfPdlsNo" />
        <TextField label="bl_dt" source="blDt" />
        <TextField label="bl_no" source="blNo" />
        <TextField label="bnbn_cmdt_wrhs_cd" source="bnbnCmdtWrhsCd" />
        <TextField label="brndNm" source="brndNm" />
        <TextField label="cag_mgmt_no" source="cagMgmtNo" />
        <TextField label="cmdtClsfSpelCd" source="cmdtClsfSpelCd" />
        <TextField label="cmdt_stge_loct_cd" source="cmdtStgeLoctCd" />
        <TextField label="cntr_cag_yn" source="cntrCagYn" />
        <TextField label="cntr_gcnt" source="cntrGcnt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="cscl_pln_cd" source="csclPlnCd" />
        <TextField label="csm_cnty_cd" source="csmCntyCd" />
        <TextField label="dcer_cd" source="dcerCd" />
        <TextField label="dcer_wrte_cn" source="dcerWrteCn" />
        <TextField label="dclr_cstm_cd" source="dclrCstmCd" />
        <TextField label="dclr_pt_cd" source="dclrPtCd" />
        <TextField label="dcrd_yn" source="dcrdYn" />
        <TextField label="dcsh_fm_cd" source="dcshFmCd" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="dept_cd" source="deptCd" />
        <TextField label="dispr_cd" source="disprCd" />
        <TextField label="divd_cscl_tp_cd" source="divdCsclTpCd" />
        <TextField label="divdFfmnTpCd" source="divdFfmnTpCd" />
        <TextField label="dlng_cond1_cd" source="dlngCond1Cd" />
        <TextField label="dlng_cond2_cd" source="dlngCond2Cd" />
        <TextField label="dlngPdlsNm" source="dlngPdlsNm" />
        <TextField label="dlng_pymn_mean_cd" source="dlngPymnMeanCd" />
        <TextField label="dlvr_cond_cd" source="dlvrCondCd" />
        <TextField label="dlvr_plc_cd" source="dlvrPlcCd" />
        <TextField label="dstn_cnty_cd" source="dstnCntyCd" />
        <TextField label="dstn_regn_cd" source="dstnRegnCd" />
        <TextField label="dtl_dcsh_no" source="dtlDcshNo" />
        <TextField label="epc_cd" source="epcCd" />
        <TextField label="exp_cnty_cd" source="expCntyCd" />
        <TextField label="exppn_cmrc_regs_no" source="exppnCmrcRegsNo" />
        <TextField label="exppn_idfy_no" source="exppnIdfyNo" />
        <TextField label="exppn_idfy_no_tp_cd" source="exppnIdfyNoTpCd" />
        <TextField label="frst_dclr_dt" source="frstDclrDt" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="hsCd" source="hsCd" />
        <TextField label="hsErrPvntVal" source="hsErrPvntVal" />
        <TextField label="hsExcpMtrCd" source="hsExcpMtrCd" />
        <TextField label="ID" source="id" />
        <TextField label="imppn_cmrc_regs_no" source="imppnCmrcRegsNo" />
        <TextField label="imppn_idfy_no" source="imppnIdfyNo" />
        <TextField label="imppn_idfy_no_tp_cd" source="imppnIdfyNoTpCd" />
        <TextField label="invc_no" source="invcNo" />
        <TextField label="invc_pbls_dt" source="invcPblsDt" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="last_yn" source="lastYn" />
        <TextField label="ldnp_cd" source="ldnpCd" />
        <TextField label="ldun_dt" source="ldunDt" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="mdfy_rsn_cd" source="mdfyRsnCd" />
        <TextField label="mdfy_rsn_cn" source="mdfyRsnCn" />
        <TextField label="mgDscnApreNo" source="mgDscnApreNo" />
        <TextField label="nwprScarCmdtCd" source="nwprScarCmdtCd" />
        <TextField label="oilTankNo" source="oilTankNo" />
        <TextField label="orcyCntyCd" source="orcyCntyCd" />
        <TextField label="owhs_prc_ev_yn" source="owhsPrcEvYn" />
        <TextField label="pckgDesc" source="pckgDesc" />
        <TextField label="pckgShmrMarkNo" source="pckgShmrMarkNo" />
        <TextField label="pckg_tgcnt" source="pckgTgcnt" />
        <TextField label="pdlsClsfBfhnJdgnPn" source="pdlsClsfBfhnJdgnPn" />
        <TextField label="pdls_gcnt" source="pdlsGcnt" />
        <TextField label="pdlsNm" source="pdlsNm" />
        <TextField label="pdlsNo" source="pdlsNo" />
        <TextField label="pdlsNtwg" source="pdlsNtwg" />
        <TextField label="pdlsPckgGcnt" source="pdlsPckgGcnt" />
        <TextField label="pdlsPckgUtCd" source="pdlsPckgUtCd" />
        <TextField label="pdlsTtwg" source="pdlsTtwg" />
        <TextField label="prc_dcsh_wrte_yn" source="prcDcshWrteYn" />
        <TextField label="prcDtrmMeanCd" source="prcDtrmMeanCd" />
        <TextField label="prhbCmdtCd" source="prhbCmdtCd" />
        <TextField label="prmsnt_dt" source="prmsntDt" />
        <TextField label="prmsnt_stts_cd" source="prmsntSttsCd" />
        <TextField label="prvlCd" source="prvlCd" />
        <TextField label="psmgt_ffmn_xpir_prid" source="psmgtFfmnXpirPrid" />
        <TextField label="psnr_prcs_cn" source="psnrPrcsCn" />
        <TextField label="psnr_reff_no" source="psnrReffNo" />
        <TextField label="pymn_ac_no" source="pymnAcNo" />
        <TextField label="pymn_bnk_brnh_cd" source="pymnBnkBrnhCd" />
        <TextField label="pymn_bnk_cd" source="pymnBnkCd" />
        <TextField label="pymn_mean_cd" source="pymnMeanCd" />
        <TextField label="qtaApreNo" source="qtaApreNo" />
        <TextField label="qty" source="qty" />
        <TextField label="qtyUtCd" source="qtyUtCd" />
        <TextField label="refNo" source="refNo" />
        <TextField label="reff_no" source="reffNo" />
        <TextField label="regm_rqst_cd" source="regmRqstCd" />
        <TextField label="rethink" source="rethink" />
        <TextField label="rlbr_cstm_cd" source="rlbrCstmCd" />
        <TextField label="rqst_dt" source="rqstDt" />
        <TextField label="ship_nm" source="shipNm" />
        <TextField label="sys_use_ss" source="sysUseSs" />
        <TextField label="trde_dlng_cnty_cd" source="trdeDlngCntyCd" />
        <TextField label="trifBaseVal" source="trifBaseVal" />
        <TextField label="trnp_meth_idfy_no" source="trnpMethIdfyNo" />
        <TextField label="trnp_meth_knd_cd" source="trnpMethKndCd" />
        <TextField label="trnp_meth_nat_cd" source="trnpMethNatCd" />
        <TextField label="txpr_cmrc_regs_no" source="txprCmrcRegsNo" />
        <TextField label="txpr_idfy_no" source="txprIdfyNo" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uprPdlsNo" source="uprPdlsNo" />
        <TextField label="vhclYn" source="vhclYn" />
        <TextField label="wkng_pt_cd" source="wkngPtCd" />
      </SimpleShowLayout>
    </Show>
  );
};
