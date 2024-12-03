import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuotationItemService } from "./quotationItem.service";
import { QuotationItemControllerBase } from "./base/quotationItem.controller.base";

@swagger.ApiTags("quotationItems")
@common.Controller("quotationItems")
export class QuotationItemController extends QuotationItemControllerBase {
  constructor(protected readonly service: QuotationItemService) {
    super(service);
  }
}
