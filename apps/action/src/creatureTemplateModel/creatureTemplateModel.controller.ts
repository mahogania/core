import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureTemplateModelService } from "./creatureTemplateModel.service";
import { CreatureTemplateModelControllerBase } from "./base/creatureTemplateModel.controller.base";

@swagger.ApiTags("creatureTemplateModels")
@common.Controller("creatureTemplateModels")
export class CreatureTemplateModelController extends CreatureTemplateModelControllerBase {
  constructor(
    protected readonly service: CreatureTemplateModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
