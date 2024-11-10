import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemVariantService } from "./itemVariant.service";
import { ItemVariantControllerBase } from "./base/itemVariant.controller.base";

@swagger.ApiTags("itemVariants")
@common.Controller("itemVariants")
export class ItemVariantController extends ItemVariantControllerBase {
  constructor(protected readonly service: ItemVariantService) {
    super(service);
  }
}
