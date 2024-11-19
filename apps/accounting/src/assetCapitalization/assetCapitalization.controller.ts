import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetCapitalizationService } from "./assetCapitalization.service";
import { AssetCapitalizationControllerBase } from "./base/assetCapitalization.controller.base";

@swagger.ApiTags("assetCapitalizations")
@common.Controller("assetCapitalizations")
export class AssetCapitalizationController extends AssetCapitalizationControllerBase {
  constructor(protected readonly service: AssetCapitalizationService) {
    super(service);
  }
}
