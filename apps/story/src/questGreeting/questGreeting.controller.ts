import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestGreetingService } from "./questGreeting.service";
import { QuestGreetingControllerBase } from "./base/questGreeting.controller.base";

@swagger.ApiTags("questGreetings")
@common.Controller("questGreetings")
export class QuestGreetingController extends QuestGreetingControllerBase {
  constructor(
    protected readonly service: QuestGreetingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
