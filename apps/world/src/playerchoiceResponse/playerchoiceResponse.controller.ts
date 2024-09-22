import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerchoiceResponseService } from "./playerchoiceResponse.service";
import { PlayerchoiceResponseControllerBase } from "./base/playerchoiceResponse.controller.base";

@swagger.ApiTags("playerchoiceResponses")
@common.Controller("playerchoiceResponses")
export class PlayerchoiceResponseController extends PlayerchoiceResponseControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
