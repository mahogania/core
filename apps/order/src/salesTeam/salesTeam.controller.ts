import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesTeamService } from "./salesTeam.service";
import { SalesTeamControllerBase } from "./base/salesTeam.controller.base";

@swagger.ApiTags("salesTeams")
@common.Controller("salesTeams")
export class SalesTeamController extends SalesTeamControllerBase {
  constructor(protected readonly service: SalesTeamService) {
    super(service);
  }
}
