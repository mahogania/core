import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ChequePrintTemplateShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="acc_no_dist_from_left_edge"
          source="accNoDistFromLeftEdge"
        />
        <TextField
          label="acc_no_dist_from_top_edge"
          source="accNoDistFromTopEdge"
        />
        <TextField
          label="acc_pay_dist_from_left_edge"
          source="accPayDistFromLeftEdge"
        />
        <TextField
          label="acc_pay_dist_from_top_edge"
          source="accPayDistFromTopEdge"
        />
        <TextField
          label="amt_in_figures_from_left_edge"
          source="amtInFiguresFromLeftEdge"
        />
        <TextField
          label="amt_in_figures_from_top_edge"
          source="amtInFiguresFromTopEdge"
        />
        <TextField label="amt_in_word_width" source="amtInWordWidth" />
        <TextField
          label="amt_in_words_from_left_edge"
          source="amtInWordsFromLeftEdge"
        />
        <TextField
          label="amt_in_words_from_top_edge"
          source="amtInWordsFromTopEdge"
        />
        <TextField
          label="amt_in_words_line_spacing"
          source="amtInWordsLineSpacing"
        />
        <TextField label="bank_name" source="bankName" />
        <TextField label="cheque_height" source="chequeHeight" />
        <TextField label="cheque_size" source="chequeSize" />
        <TextField label="cheque_width" source="chequeWidth" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField
          label="date_dist_from_left_edge"
          source="dateDistFromLeftEdge"
        />
        <TextField
          label="date_dist_from_top_edge"
          source="dateDistFromTopEdge"
        />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="has_print_format" source="hasPrintFormat" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="is_account_payable" source="isAccountPayable" />
        <TextField label="message_to_show" source="messageToShow" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="owner" source="owner" />
        <TextField
          label="payer_name_from_left_edge"
          source="payerNameFromLeftEdge"
        />
        <TextField
          label="payer_name_from_top_edge"
          source="payerNameFromTopEdge"
        />
        <TextField label="scanned_cheque" source="scannedCheque" />
        <TextField
          label="signatory_from_left_edge"
          source="signatoryFromLeftEdge"
        />
        <TextField
          label="signatory_from_top_edge"
          source="signatoryFromTopEdge"
        />
        <TextField
          label="starting_position_from_top_edge"
          source="startingPositionFromTopEdge"
        />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
