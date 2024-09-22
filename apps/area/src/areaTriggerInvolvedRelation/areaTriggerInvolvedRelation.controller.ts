import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaTriggerInvolvedRelationService } from "./areaTriggerInvolvedRelation.service";
import { AreaTriggerInvolvedRelationControllerBase } from "./base/areaTriggerInvolvedRelation.controller.base";

@swagger.ApiTags("areaTriggerInvolvedRelations")
@common.Controller("areaTriggerInvolvedRelations")
export class AreaTriggerInvolvedRelationController extends AreaTriggerInvolvedRelationControllerBase {
  constructor(
    protected readonly service: AreaTriggerInvolvedRelationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
