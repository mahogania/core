import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BankTransactionMappingService } from "./bankTransactionMapping.service";
import { BankTransactionMappingControllerBase } from "./base/bankTransactionMapping.controller.base";

@swagger.ApiTags("bankTransactionMappings")
@common.Controller("bankTransactionMappings")
export class BankTransactionMappingController extends BankTransactionMappingControllerBase {
  constructor(protected readonly service: BankTransactionMappingService) {
    super(service);
  }
}
