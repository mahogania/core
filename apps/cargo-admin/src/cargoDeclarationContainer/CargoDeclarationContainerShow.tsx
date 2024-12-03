import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CargoDeclarationContainerShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cag_mgmt_no" source="cagMgmtNo" />
        <TextField label="cntr_no" source="cntrNo" />
        <TextField label="cntr_srno" source="cntrSrno" />
        <TextField label="cntr_tp_cd" source="cntrTpCd" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="ecntr_wght" source="ecntrWght" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mrn" source="mrn" />
        <TextField label="pckg_gcnt" source="pckgGcnt" />
        <TextField label="pckg_ut_cd" source="pckgUtCd" />
        <TextField label="seal_chpn1" source="sealChpn1" />
        <TextField label="seal_chpn2" source="sealChpn2" />
        <TextField label="seal_chpn3" source="sealChpn3" />
        <TextField label="seal_no1" source="sealNo1" />
        <TextField label="seal_no2" source="sealNo2" />
        <TextField label="seal_no3" source="sealNo3" />
        <TextField label="ttwg" source="ttwg" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
