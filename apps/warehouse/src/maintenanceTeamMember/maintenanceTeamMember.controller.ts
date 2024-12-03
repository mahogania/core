import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaintenanceTeamMemberService } from "./maintenanceTeamMember.service";
import { MaintenanceTeamMemberControllerBase } from "./base/maintenanceTeamMember.controller.base";

@swagger.ApiTags("maintenanceTeamMembers")
@common.Controller("maintenanceTeamMembers")
export class MaintenanceTeamMemberController extends MaintenanceTeamMemberControllerBase {
  constructor(protected readonly service: MaintenanceTeamMemberService) {
    super(service);
  }
}
