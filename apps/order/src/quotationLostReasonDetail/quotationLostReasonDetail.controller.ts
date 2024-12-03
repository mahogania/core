import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuotationLostReasonDetailService } from "./quotationLostReasonDetail.service";
import { QuotationLostReasonDetailControllerBase } from "./base/quotationLostReasonDetail.controller.base";

@swagger.ApiTags("quotationLostReasonDetails")
@common.Controller("quotationLostReasonDetails")
export class QuotationLostReasonDetailController extends QuotationLostReasonDetailControllerBase {
  constructor(protected readonly service: QuotationLostReasonDetailService) {
    super(service);
  }
}
