import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CargoDeclarationTransportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="chss_no" source="chssNo" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="drvr_nm" source="drvrNm" />
        <TextInput label="drvr_pspr_no" source="drvrPsprNo" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <TextInput label="mrn" source="mrn" />
        <TextInput label="trnp_meth_nat_cd" source="trnpMethNatCd" />
        <TextInput label="vhcl_mnur_cd" source="vhclMnurCd" />
        <NumberInput label="vhcl_nttn" source="vhclNttn" />
        <TextInput label="vhcl_pt_cd" source="vhclPtCd" />
        <TextInput label="vhcl_rgsr_no" source="vhclRgsrNo" />
        <NumberInput step={1} label="vhcl_srno" source="vhclSrno" />
        <NumberInput label="vhcl_ttn" source="vhclTtn" />
      </SimpleForm>
    </Create>
  );
};
