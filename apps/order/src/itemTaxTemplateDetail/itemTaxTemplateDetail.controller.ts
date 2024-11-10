import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemTaxTemplateDetailService } from "./itemTaxTemplateDetail.service";
import { ItemTaxTemplateDetailControllerBase } from "./base/itemTaxTemplateDetail.controller.base";

@swagger.ApiTags("itemTaxTemplateDetails")
@common.Controller("itemTaxTemplateDetails")
export class ItemTaxTemplateDetailController extends ItemTaxTemplateDetailControllerBase {
  constructor(protected readonly service: ItemTaxTemplateDetailService) {
    super(service);
  }
}
