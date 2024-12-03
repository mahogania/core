import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosProfileService } from "./posProfile.service";
import { PosProfileControllerBase } from "./base/posProfile.controller.base";

@swagger.ApiTags("posProfiles")
@common.Controller("posProfiles")
export class PosProfileController extends PosProfileControllerBase {
  constructor(protected readonly service: PosProfileService) {
    super(service);
  }
}
