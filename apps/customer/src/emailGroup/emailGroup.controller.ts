import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailGroupService } from "./emailGroup.service";
import { EmailGroupControllerBase } from "./base/emailGroup.controller.base";

@swagger.ApiTags("emailGroups")
@common.Controller("emailGroups")
export class EmailGroupController extends EmailGroupControllerBase {
  constructor(protected readonly service: EmailGroupService) {
    super(service);
  }
}
