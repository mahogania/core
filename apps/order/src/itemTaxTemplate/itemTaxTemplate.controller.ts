import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemTaxTemplateService } from "./itemTaxTemplate.service";
import { ItemTaxTemplateControllerBase } from "./base/itemTaxTemplate.controller.base";

@swagger.ApiTags("itemTaxTemplates")
@common.Controller("itemTaxTemplates")
export class ItemTaxTemplateController extends ItemTaxTemplateControllerBase {
  constructor(protected readonly service: ItemTaxTemplateService) {
    super(service);
  }
}
