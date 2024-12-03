import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UomCategoryService } from "./uomCategory.service";
import { UomCategoryControllerBase } from "./base/uomCategory.controller.base";

@swagger.ApiTags("uomCategories")
@common.Controller("uomCategories")
export class UomCategoryController extends UomCategoryControllerBase {
  constructor(protected readonly service: UomCategoryService) {
    super(service);
  }
}
