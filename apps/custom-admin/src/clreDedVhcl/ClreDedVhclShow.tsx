import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ClreDedVhclShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cabo_nm" source="caboNm" />
        <TextField label="car_rgsr_no" source="carRgsrNo" />
        <TextField label="chss_no" source="chssNo" />
        <TextField label="clr_nm" source="clrNm" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="dpcmt_cn" source="dpcmtCn" />
        <TextField label="drvr_addr" source="drvrAddr" />
        <TextField label="drvr_nm" source="drvrNm" />
        <TextField label="drvr_post_no" source="drvrPostNo" />
        <TextField label="fl_knd_nm" source="flKndNm" />
        <TextField label="frst_opra_dt" source="frstOpraDt" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="imp_pt_nm" source="impPtNm" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="load_wght_cn" source="loadWghtCn" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="mdl_stsz_no" source="mdlStszNo" />
        <TextField label="mkng_yy" source="mkngYy" />
        <TextField label="otpt_cn" source="otptCn" />
        <TextField label="pdls_no" source="pdlsNo" />
        <TextField label="reff_no" source="reffNo" />
        <TextField label="stcnt" source="stcnt" />
        <TextField label="tpd_mgmt_no" source="tpdMgmtNo" />
        <TextField label="trsf_nnpr_end_dt" source="trsfNnprEndDt" />
        <TextField label="trsf_nnpr_strt_dt" source="trsfNnprStrtDt" />
        <TextField label="trsf_nnpr_yn" source="trsfNnprYn" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vhcl_knd_cd" source="vhclKndCd" />
        <TextField label="vhcl_knd_nm" source="vhclKndNm" />
        <TextField label="vhcl_mdl_cd" source="vhclMdlCd" />
        <TextField label="vhcl_mnur_cd" source="vhclMnurCd" />
        <TextField label="vhcl_rele_dt" source="vhclReleDt" />
        <TextField label="vhcl_wght_cn" source="vhclWghtCn" />
      </SimpleShowLayout>
    </Show>
  );
};
