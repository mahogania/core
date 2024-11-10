import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailGroupMemberService } from "./emailGroupMember.service";
import { EmailGroupMemberControllerBase } from "./base/emailGroupMember.controller.base";

@swagger.ApiTags("emailGroupMembers")
@common.Controller("emailGroupMembers")
export class EmailGroupMemberController extends EmailGroupMemberControllerBase {
  constructor(protected readonly service: EmailGroupMemberService) {
    super(service);
  }
}
