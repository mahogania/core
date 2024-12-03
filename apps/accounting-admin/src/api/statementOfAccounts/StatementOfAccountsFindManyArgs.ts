import { StatementOfAccountsWhereInput } from "./StatementOfAccountsWhereInput";
import { StatementOfAccountsOrderByInput } from "./StatementOfAccountsOrderByInput";

export type StatementOfAccountsFindManyArgs = {
  where?: StatementOfAccountsWhereInput;
  orderBy?: Array<StatementOfAccountsOrderByInput>;
  skip?: number;
  take?: number;
};
