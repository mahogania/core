import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StatementOfAccountsCustomerService } from "./statementOfAccountsCustomer.service";
import { StatementOfAccountsCustomerControllerBase } from "./base/statementOfAccountsCustomer.controller.base";

@swagger.ApiTags("statementOfAccountsCustomers")
@common.Controller("statementOfAccountsCustomers")
export class StatementOfAccountsCustomerController extends StatementOfAccountsCustomerControllerBase {
  constructor(protected readonly service: StatementOfAccountsCustomerService) {
    super(service);
  }
}
