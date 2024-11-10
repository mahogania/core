import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosProfileUserService } from "./posProfileUser.service";
import { PosProfileUserControllerBase } from "./base/posProfileUser.controller.base";

@swagger.ApiTags("posProfileUsers")
@common.Controller("posProfileUsers")
export class PosProfileUserController extends PosProfileUserControllerBase {
  constructor(protected readonly service: PosProfileUserService) {
    super(service);
  }
}
