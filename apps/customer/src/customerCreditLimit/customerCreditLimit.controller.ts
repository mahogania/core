import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerCreditLimitService } from "./customerCreditLimit.service";
import { CustomerCreditLimitControllerBase } from "./base/customerCreditLimit.controller.base";

@swagger.ApiTags("customerCreditLimits")
@common.Controller("customerCreditLimits")
export class CustomerCreditLimitController extends CustomerCreditLimitControllerBase {
  constructor(protected readonly service: CustomerCreditLimitService) {
    super(service);
  }
}
