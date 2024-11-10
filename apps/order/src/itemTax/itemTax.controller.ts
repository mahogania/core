import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemTaxService } from "./itemTax.service";
import { ItemTaxControllerBase } from "./base/itemTax.controller.base";

@swagger.ApiTags("itemTaxes")
@common.Controller("itemTaxes")
export class ItemTaxController extends ItemTaxControllerBase {
  constructor(protected readonly service: ItemTaxService) {
    super(service);
  }
}
