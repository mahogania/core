import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomDocPermService } from "./customDocPerm.service";
import { CustomDocPermControllerBase } from "./base/customDocPerm.controller.base";

@swagger.ApiTags("customDocPerms")
@common.Controller("customDocPerms")
export class CustomDocPermController extends CustomDocPermControllerBase {
  constructor(protected readonly service: CustomDocPermService) {
    super(service);
  }
}
