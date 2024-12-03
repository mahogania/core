import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesPartnerItemService } from "./salesPartnerItem.service";
import { SalesPartnerItemControllerBase } from "./base/salesPartnerItem.controller.base";

@swagger.ApiTags("salesPartnerItems")
@common.Controller("salesPartnerItems")
export class SalesPartnerItemController extends SalesPartnerItemControllerBase {
  constructor(protected readonly service: SalesPartnerItemService) {
    super(service);
  }
}
