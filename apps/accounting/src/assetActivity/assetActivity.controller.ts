import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetActivityService } from "./assetActivity.service";
import { AssetActivityControllerBase } from "./base/assetActivity.controller.base";

@swagger.ApiTags("assetActivities")
@common.Controller("assetActivities")
export class AssetActivityController extends AssetActivityControllerBase {
  constructor(protected readonly service: AssetActivityService) {
    super(service);
  }
}
