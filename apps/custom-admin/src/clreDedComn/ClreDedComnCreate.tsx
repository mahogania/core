import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ClreDedComnCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="aditTxQty" source="aditTxQty" />
        <TextInput label="aditTxQtyUtCd" source="aditTxQtyUtCd" />
        <NumberInput label="al_ntwg" source="alNtwg" />
        <NumberInput label="al_ttwg" source="alTtwg" />
        <TextInput label="apcAtpmEndDt" source="apcAtpmEndDt" />
        <TextInput label="apcAtpmStrtDt" source="apcAtpmStrtDt" />
        <TextInput label="apcCd" source="apcCd" />
        <TextInput label="arvl_dt" source="arvlDt" />
        <TextInput label="bf_bnbn_cmdt_wrhs_cd" source="bfBnbnCmdtWrhsCd" />
        <TextInput label="bfDtlDcshDt" source="bfDtlDcshDt" />
        <TextInput label="bfDtlDcshNo" source="bfDtlDcshNo" />
        <TextInput label="bfPdlsNo" source="bfPdlsNo" />
        <TextInput label="bl_dt" source="blDt" />
        <TextInput label="bl_no" source="blNo" />
        <TextInput label="bnbn_cmdt_wrhs_cd" source="bnbnCmdtWrhsCd" />
        <TextInput label="brndNm" source="brndNm" />
        <TextInput label="cag_mgmt_no" source="cagMgmtNo" />
        <TextInput label="cmdtClsfSpelCd" source="cmdtClsfSpelCd" />
        <TextInput label="cmdt_stge_loct_cd" source="cmdtStgeLoctCd" />
        <TextInput label="cntr_cag_yn" source="cntrCagYn" />
        <NumberInput step={1} label="cntr_gcnt" source="cntrGcnt" />
        <TextInput label="cscl_pln_cd" source="csclPlnCd" />
        <TextInput label="csm_cnty_cd" source="csmCntyCd" />
        <TextInput label="dcer_cd" source="dcerCd" />
        <TextInput label="dcer_wrte_cn" multiline source="dcerWrteCn" />
        <TextInput label="dclr_cstm_cd" source="dclrCstmCd" />
        <TextInput label="dclr_pt_cd" source="dclrPtCd" />
        <TextInput label="dcrd_yn" source="dcrdYn" />
        <TextInput label="dcsh_fm_cd" source="dcshFmCd" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="dept_cd" source="deptCd" />
        <TextInput label="dispr_cd" source="disprCd" />
        <TextInput label="divd_cscl_tp_cd" source="divdCsclTpCd" />
        <TextInput label="divdFfmnTpCd" source="divdFfmnTpCd" />
        <TextInput label="dlng_cond1_cd" source="dlngCond1Cd" />
        <TextInput label="dlng_cond2_cd" source="dlngCond2Cd" />
        <TextInput label="dlngPdlsNm" source="dlngPdlsNm" />
        <TextInput label="dlng_pymn_mean_cd" source="dlngPymnMeanCd" />
        <TextInput label="dlvr_cond_cd" source="dlvrCondCd" />
        <TextInput label="dlvr_plc_cd" source="dlvrPlcCd" />
        <TextInput label="dstn_cnty_cd" source="dstnCntyCd" />
        <TextInput label="dstn_regn_cd" source="dstnRegnCd" />
        <TextInput label="dtl_dcsh_no" source="dtlDcshNo" />
        <TextInput label="epc_cd" source="epcCd" />
        <TextInput label="exp_cnty_cd" source="expCntyCd" />
        <TextInput label="exppn_cmrc_regs_no" source="exppnCmrcRegsNo" />
        <TextInput label="exppn_idfy_no" source="exppnIdfyNo" />
        <TextInput label="exppn_idfy_no_tp_cd" source="exppnIdfyNoTpCd" />
        <TextInput label="frst_dclr_dt" source="frstDclrDt" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextInput label="hsCd" source="hsCd" />
        <TextInput label="hsErrPvntVal" source="hsErrPvntVal" />
        <TextInput label="hsExcpMtrCd" source="hsExcpMtrCd" />
        <TextInput label="imppn_cmrc_regs_no" source="imppnCmrcRegsNo" />
        <TextInput label="imppn_idfy_no" source="imppnIdfyNo" />
        <TextInput label="imppn_idfy_no_tp_cd" source="imppnIdfyNoTpCd" />
        <TextInput label="invc_no" source="invcNo" />
        <TextInput label="invc_pbls_dt" source="invcPblsDt" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <TextInput label="last_yn" source="lastYn" />
        <TextInput label="ldnp_cd" source="ldnpCd" />
        <TextInput label="ldun_dt" source="ldunDt" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextInput label="mdfy_rsn_cd" source="mdfyRsnCd" />
        <TextInput label="mdfy_rsn_cn" multiline source="mdfyRsnCn" />
        <TextInput label="mgDscnApreNo" source="mgDscnApreNo" />
        <TextInput label="nwprScarCmdtCd" source="nwprScarCmdtCd" />
        <TextInput label="oilTankNo" source="oilTankNo" />
        <TextInput label="orcyCntyCd" source="orcyCntyCd" />
        <TextInput label="owhs_prc_ev_yn" source="owhsPrcEvYn" />
        <TextInput label="pckgDesc" multiline source="pckgDesc" />
        <TextInput label="pckgShmrMarkNo" source="pckgShmrMarkNo" />
        <NumberInput step={1} label="pckg_tgcnt" source="pckgTgcnt" />
        <TextInput label="pdlsClsfBfhnJdgnPn" source="pdlsClsfBfhnJdgnPn" />
        <NumberInput step={1} label="pdls_gcnt" source="pdlsGcnt" />
        <TextInput label="pdlsNm" source="pdlsNm" />
        <TextInput label="pdlsNo" source="pdlsNo" />
        <NumberInput label="pdlsNtwg" source="pdlsNtwg" />
        <NumberInput step={1} label="pdlsPckgGcnt" source="pdlsPckgGcnt" />
        <TextInput label="pdlsPckgUtCd" source="pdlsPckgUtCd" />
        <NumberInput label="pdlsTtwg" source="pdlsTtwg" />
        <TextInput label="prc_dcsh_wrte_yn" source="prcDcshWrteYn" />
        <TextInput label="prcDtrmMeanCd" source="prcDtrmMeanCd" />
        <TextInput label="prhbCmdtCd" source="prhbCmdtCd" />
        <TextInput label="prmsnt_dt" source="prmsntDt" />
        <TextInput label="prmsnt_stts_cd" source="prmsntSttsCd" />
        <TextInput label="prvlCd" source="prvlCd" />
        <NumberInput
          step={1}
          label="psmgt_ffmn_xpir_prid"
          source="psmgtFfmnXpirPrid"
        />
        <TextInput label="psnr_prcs_cn" multiline source="psnrPrcsCn" />
        <TextInput label="psnr_reff_no" source="psnrReffNo" />
        <TextInput label="pymn_ac_no" source="pymnAcNo" />
        <TextInput label="pymn_bnk_brnh_cd" source="pymnBnkBrnhCd" />
        <TextInput label="pymn_bnk_cd" source="pymnBnkCd" />
        <TextInput label="pymn_mean_cd" source="pymnMeanCd" />
        <TextInput label="qtaApreNo" source="qtaApreNo" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="qtyUtCd" source="qtyUtCd" />
        <TextInput label="refNo" source="refNo" />
        <TextInput label="reff_no" source="reffNo" />
        <TextInput label="regm_rqst_cd" source="regmRqstCd" />
        <NumberInput step={1} label="rethink" source="rethink" />
        <TextInput label="rlbr_cstm_cd" source="rlbrCstmCd" />
        <TextInput label="rqst_dt" source="rqstDt" />
        <TextInput label="ship_nm" source="shipNm" />
        <NumberInput step={1} label="sys_use_ss" source="sysUseSs" />
        <TextInput label="trde_dlng_cnty_cd" source="trdeDlngCntyCd" />
        <TextInput label="trifBaseVal" source="trifBaseVal" />
        <TextInput label="trnp_meth_idfy_no" source="trnpMethIdfyNo" />
        <TextInput label="trnp_meth_knd_cd" source="trnpMethKndCd" />
        <TextInput label="trnp_meth_nat_cd" source="trnpMethNatCd" />
        <TextInput label="txpr_cmrc_regs_no" source="txprCmrcRegsNo" />
        <TextInput label="txpr_idfy_no" source="txprIdfyNo" />
        <TextInput label="uprPdlsNo" source="uprPdlsNo" />
        <TextInput label="vhclYn" source="vhclYn" />
        <TextInput label="wkng_pt_cd" source="wkngPtCd" />
      </SimpleForm>
    </Create>
  );
};
