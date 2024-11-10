import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetRepairService } from "./assetRepair.service";
import { AssetRepairControllerBase } from "./base/assetRepair.controller.base";

@swagger.ApiTags("assetRepairs")
@common.Controller("assetRepairs")
export class AssetRepairController extends AssetRepairControllerBase {
  constructor(protected readonly service: AssetRepairService) {
    super(service);
  }
}
