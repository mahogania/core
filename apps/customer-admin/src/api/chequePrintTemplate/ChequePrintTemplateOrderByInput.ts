import { SortOrder } from "../../util/SortOrder";

export type ChequePrintTemplateOrderByInput = {
  accNoDistFromLeftEdge?: SortOrder;
  accNoDistFromTopEdge?: SortOrder;
  accPayDistFromLeftEdge?: SortOrder;
  accPayDistFromTopEdge?: SortOrder;
  amtInFiguresFromLeftEdge?: SortOrder;
  amtInFiguresFromTopEdge?: SortOrder;
  amtInWordWidth?: SortOrder;
  amtInWordsFromLeftEdge?: SortOrder;
  amtInWordsFromTopEdge?: SortOrder;
  amtInWordsLineSpacing?: SortOrder;
  bankName?: SortOrder;
  chequeHeight?: SortOrder;
  chequeSize?: SortOrder;
  chequeWidth?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  dateDistFromLeftEdge?: SortOrder;
  dateDistFromTopEdge?: SortOrder;
  docstatus?: SortOrder;
  hasPrintFormat?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isAccountPayable?: SortOrder;
  messageToShow?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  owner?: SortOrder;
  payerNameFromLeftEdge?: SortOrder;
  payerNameFromTopEdge?: SortOrder;
  scannedCheque?: SortOrder;
  signatoryFromLeftEdge?: SortOrder;
  signatoryFromTopEdge?: SortOrder;
  startingPositionFromTopEdge?: SortOrder;
  updatedAt?: SortOrder;
};
