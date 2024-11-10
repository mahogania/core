import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetShiftFactorService } from "./assetShiftFactor.service";
import { AssetShiftFactorControllerBase } from "./base/assetShiftFactor.controller.base";

@swagger.ApiTags("assetShiftFactors")
@common.Controller("assetShiftFactors")
export class AssetShiftFactorController extends AssetShiftFactorControllerBase {
  constructor(protected readonly service: AssetShiftFactorService) {
    super(service);
  }
}
