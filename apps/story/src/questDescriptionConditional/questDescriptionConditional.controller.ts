import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestDescriptionConditionalService } from "./questDescriptionConditional.service";
import { QuestDescriptionConditionalControllerBase } from "./base/questDescriptionConditional.controller.base";

@swagger.ApiTags("questDescriptionConditionals")
@common.Controller("questDescriptionConditionals")
export class QuestDescriptionConditionalController extends QuestDescriptionConditionalControllerBase {
  constructor(
    protected readonly service: QuestDescriptionConditionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
