import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosPaymentMethodService } from "./posPaymentMethod.service";
import { PosPaymentMethodControllerBase } from "./base/posPaymentMethod.controller.base";

@swagger.ApiTags("posPaymentMethods")
@common.Controller("posPaymentMethods")
export class PosPaymentMethodController extends PosPaymentMethodControllerBase {
  constructor(protected readonly service: PosPaymentMethodService) {
    super(service);
  }
}
