import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentEntryDeductionService } from "./paymentEntryDeduction.service";
import { PaymentEntryDeductionControllerBase } from "./base/paymentEntryDeduction.controller.base";

@swagger.ApiTags("paymentEntryDeductions")
@common.Controller("paymentEntryDeductions")
export class PaymentEntryDeductionController extends PaymentEntryDeductionControllerBase {
  constructor(protected readonly service: PaymentEntryDeductionService) {
    super(service);
  }
}
