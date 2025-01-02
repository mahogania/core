import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CariCagDcshBlVhclShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cag_mgmt_no" source="cagMgmtNo" />
        <TextField label="chss_no" source="chssNo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="engn_clnd_gcnt" source="engnClndGcnt" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mrn" source="mrn" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vhcl_knd_nm" source="vhclKndNm" />
        <TextField label="vhcl_mdl_cd" source="vhclMdlCd" />
        <TextField label="vhcl_mnfc_yy" source="vhclMnfcYy" />
        <TextField label="vhcl_mnur_cd" source="vhclMnurCd" />
        <TextField label="vhcl_rgsr_no" source="vhclRgsrNo" />
        <TextField label="vhcl_srno" source="vhclSrno" />
        <TextField label="vhcl_totl_wght" source="vhclTotlWght" />
      </SimpleShowLayout>
    </Show>
  );
};
