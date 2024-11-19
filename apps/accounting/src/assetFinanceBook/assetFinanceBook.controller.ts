import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetFinanceBookService } from "./assetFinanceBook.service";
import { AssetFinanceBookControllerBase } from "./base/assetFinanceBook.controller.base";

@swagger.ApiTags("assetFinanceBooks")
@common.Controller("assetFinanceBooks")
export class AssetFinanceBookController extends AssetFinanceBookControllerBase {
  constructor(protected readonly service: AssetFinanceBookService) {
    super(service);
  }
}
