import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemBarcodeService } from "./itemBarcode.service";
import { ItemBarcodeControllerBase } from "./base/itemBarcode.controller.base";

@swagger.ApiTags("itemBarcodes")
@common.Controller("itemBarcodes")
export class ItemBarcodeController extends ItemBarcodeControllerBase {
  constructor(protected readonly service: ItemBarcodeService) {
    super(service);
  }
}
