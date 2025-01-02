import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CariCagDcshBlTrlrShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cag_mgmt_no" source="cagMgmtNo" />
        <TextField label="chss_no" source="chssNo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mrn" source="mrn" />
        <TextField label="trlr_srno" source="trlrSrno" />
        <TextField label="trlr_stsz" source="trlrStsz" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vhcl_rgsr_no" source="vhclRgsrNo" />
      </SimpleShowLayout>
    </Show>
  );
};
