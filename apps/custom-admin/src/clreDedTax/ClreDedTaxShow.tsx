import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ClreDedTaxShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bscs_tax_amt" source="bscsTaxAmt" />
        <TextField label="bscs_txbs_amt" source="bscsTxbsAmt" />
        <TextField label="bscs_txrt" source="bscsTxrt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="mg_dscn_aply_amt" source="mgDscnAplyAmt" />
        <TextField label="pay_knd_cd" source="payKndCd" />
        <TextField label="pay_tax_amt" source="payTaxAmt" />
        <TextField label="pdls_no" source="pdlsNo" />
        <TextField label="rdex_amt" source="rdexAmt" />
        <TextField label="rdex_base_amt" source="rdexBaseAmt" />
        <TextField label="rdex_cd" source="rdexCd" />
        <TextField label="rdex_pt_cd" source="rdexPtCd" />
        <TextField label="rdex_txrt" source="rdexTxrt" />
        <TextField label="reff_no" source="reffNo" />
        <TextField label="tax_amt" source="taxAmt" />
        <TextField label="tax_cd" source="taxCd" />
        <TextField label="tfrt_ctgy_cd" source="tfrtCtgyCd" />
        <TextField label="txbs_amt" source="txbsAmt" />
        <TextField label="txrt" source="txrt" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
