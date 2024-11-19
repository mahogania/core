import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductBundleItemService } from "./productBundleItem.service";
import { ProductBundleItemControllerBase } from "./base/productBundleItem.controller.base";

@swagger.ApiTags("productBundleItems")
@common.Controller("productBundleItems")
export class ProductBundleItemController extends ProductBundleItemControllerBase {
  constructor(protected readonly service: ProductBundleItemService) {
    super(service);
  }
}
