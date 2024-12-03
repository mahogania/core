import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CargoDeclarationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="abrd_frwr_addr_nm" source="abrdFrwrAddrNm" />
        <TextInput label="abrd_frwr_eml" source="abrdFrwrEml" type="email" />
        <TextInput label="abrd_frwr_nm" source="abrdFrwrNm" />
        <TextInput label="abrd_frwr_tlph_no" source="abrdFrwrTlphNo" />
        <NumberInput step={1} label="al_bl_gcnt" source="alBlGcnt" />
        <NumberInput step={1} label="al_cntr_gcnt" source="alCntrGcnt" />
        <NumberInput step={1} label="al_ecntr_cnt" source="alEcntrCnt" />
        <NumberInput step={1} label="al_hbl_gcnt" source="alHblGcnt" />
        <NumberInput label="al_ntwg" source="alNtwg" />
        <NumberInput step={1} label="al_pckg_gcnt" source="alPckgGcnt" />
        <NumberInput label="al_ttwg" source="alTtwg" />
        <NumberInput step={1} label="al_vhcl_gcnt" source="alVhclGcnt" />
        <TextInput label="apre_yn_cd" source="apreYnCd" />
        <DateTimeInput label="arvl_dttm" source="arvlDttm" />
        <TextInput label="atch_file_id" source="atchFileId" />
        <TextInput label="audt_opin_cn" multiline source="audtOpinCn" />
        <TextInput label="bf_cag_mgmt_no" source="bfCagMgmtNo" />
        <TextInput label="bl_mdfy_tp_cd" source="blMdfyTpCd" />
        <TextInput label="bl_no" source="blNo" />
        <TextInput label="bl_pbls_dt" source="blPblsDt" />
        <TextInput label="bl_pt_cd" source="blPtCd" />
        <TextInput label="bl_tp_cd" source="blTpCd" />
        <TextInput label="cag_chrc_cd" source="cagChrcCd" />
        <TextInput label="cag_dcsh_rgsr_mgmt_no" source="cagDcshRgsrMgmtNo" />
        <TextInput label="cag_mgmt_no" source="cagMgmtNo" />
        <TextInput label="cag_rqst_tp_cd" source="cagRqstTpCd" />
        <TextInput label="cag_tp_cd" source="cagTpCd" />
        <TextInput label="carr_addr_nm" source="carrAddrNm" />
        <TextInput label="carr_cd" source="carrCd" />
        <TextInput label="cas_no" source="casNo" />
        <NumberInput label="cbm_vol" source="cbmVol" />
        <TextInput label="cher_addr_nm" source="cherAddrNm" />
        <TextInput label="cher_gvnm_nm" source="cherGvnmNm" />
        <TextInput label="cher_yn" source="cherYn" />
        <NumberInput label="cmdt_amt" source="cmdtAmt" />
        <TextInput label="cmdt_amt_curr_cd" source="cmdtAmtCurrCd" />
        <TextInput label="cmdt_knd_cd" source="cmdtKndCd" />
        <TextInput label="cnsi_addr_nm" source="cnsiAddrNm" />
        <TextInput label="cnsi_eml" source="cnsiEml" type="email" />
        <TextInput label="cnsi_nm" source="cnsiNm" />
        <TextInput label="cnsi_tlph_no" source="cnsiTlphNo" />
        <TextInput label="cnsi_txpr_idfy_no" source="cnsiTxprIdfyNo" />
        <TextInput label="cnsi_txpr_idfy_no_nin" source="cnsiTxprIdfyNoNin" />
        <NumberInput step={1} label="cntr_gcnt" source="cntrGcnt" />
        <TextInput label="co_rqst_no" source="coRqstNo" />
        <TextInput label="coat_trnp_yn" source="coatTrnpYn" />
        <TextInput label="del_yn" source="delYn" />
        <DateTimeInput label="dptr_dttm" source="dptrDttm" />
        <TextInput label="dptr_port_cd" source="dptrPortCd" />
        <TextInput label="drvr_nm" source="drvrNm" />
        <NumberInput label="ecntr_wght" source="ecntrWght" />
        <NumberInput label="eur_fxrt" source="eurFxrt" />
        <TextInput label="exppn_addr_nm" source="exppnAddrNm" />
        <TextInput label="exppn_eml" source="exppnEml" type="email" />
        <TextInput label="exppn_nm" source="exppnNm" />
        <TextInput label="exppn_tlph_no" source="exppnTlphNo" />
        <TextInput label="exppn_txpr_idfy_no" source="exppnTxprIdfyNo" />
        <TextInput label="exppn_txpr_idfy_no_nin" source="exppnTxprIdfyNoNin" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextInput label="frwr_cd" source="frwrCd" />
        <TextInput label="hbl_no" source="hblNo" />
        <TextInput label="hdcb_tp_cd" source="hdcbTpCd" />
        <TextInput label="hs_cd" source="hsCd" />
        <TextInput label="hsn" source="hsn" />
        <TextInput label="ibobz_cd" source="ibobzCd" />
        <TextInput label="imo_no" source="imoNo" />
        <TextInput label="jrsd_orgn_cd" source="jrsdOrgnCd" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <TextInput label="last_ldun_dt" source="lastLdunDt" />
        <TextInput label="last_thrg_port_cd" source="lastThrgPortCd" />
        <NumberInput step={1} label="ldun_bl_gcnt" source="ldunBlGcnt" />
        <TextInput label="ldun_port_cd" source="ldunPortCd" />
        <TextInput label="ldun_regn_cd" source="ldunRegnCd" />
        <TextInput label="ldun_yn" source="ldunYn" />
        <NumberInput label="lir_vol" source="lirVol" />
        <TextInput label="load_regn_cd" source="loadRegnCd" />
        <TextInput label="ltsp_yn" source="ltspYn" />
        <TextInput label="mrn" source="mrn" />
        <TextInput label="msg_prcs_stts_cd" source="msgPrcsSttsCd" />
        <TextInput label="msn" source="msn" />
        <TextInput label="ntpr_addr_nm" source="ntprAddrNm" />
        <TextInput label="ntpr_eml" source="ntprEml" type="email" />
        <TextInput label="ntpr_nm" source="ntprNm" />
        <TextInput label="ntpr_tlph_no" source="ntprTlphNo" />
        <NumberInput label="ntwg" source="ntwg" />
        <NumberInput step={1} label="pckg_gcnt" source="pckgGcnt" />
        <TextInput label="pckg_ut_cd" source="pckgUtCd" />
        <TextInput label="pdls_nm" source="pdlsNm" />
        <TextInput label="prpm_dfpm_cach_tp_cd" source="prpmDfpmCachTpCd" />
        <DateTimeInput label="real_arvl_dttm" source="realArvlDttm" />
        <TextInput label="rmrk_cn" multiline source="rmrkCn" />
        <TextInput label="selc_trgt_yn" source="selcTrgtYn" />
        <TextInput label="send_way" source="sendWay" />
        <NumberInput label="ship_nttn" source="shipNttn" />
        <NumberInput label="ship_ttn" source="shipTtn" />
        <TextInput label="shmr_cn" source="shmrCn" />
        <TextInput label="stvd_cd" source="stvdCd" />
        <TextInput label="trnh_regn_cd" source="trnhRegnCd" />
        <TextInput label="trnp_mean_cd" source="trnpMeanCd" />
        <TextInput label="trnp_meth_idfy_no" source="trnpMethIdfyNo" />
        <TextInput label="trnp_meth_loct_nm" source="trnpMethLoctNm" />
        <TextInput label="trnp_meth_nat_cd" source="trnpMethNatCd" />
        <TextInput label="trnp_meth_nm" source="trnpMethNm" />
        <TextInput label="trnp_meth_rgsr_dt" source="trnpMethRgsrDt" />
        <TextInput label="trnp_rfer_no" source="trnpRferNo" />
        <TextInput label="trsn_co_cd" source="trsnCoCd" />
        <DateTimeInput label="trsn_dttm" source="trsnDttm" />
        <NumberInput label="ttwg" source="ttwg" />
        <TextInput label="undg_gd_cd" source="undgGdCd" />
        <TextInput label="undg_id" source="undgId" />
        <NumberInput label="usd_fxrt" source="usdFxrt" />
        <NumberInput step={1} label="vhcl_gcnt" source="vhclGcnt" />
      </SimpleForm>
    </Create>
  );
};
