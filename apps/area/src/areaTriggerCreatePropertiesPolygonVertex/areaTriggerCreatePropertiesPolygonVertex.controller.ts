import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaTriggerCreatePropertiesPolygonVertexService } from "./areaTriggerCreatePropertiesPolygonVertex.service";
import { AreaTriggerCreatePropertiesPolygonVertexControllerBase } from "./base/areaTriggerCreatePropertiesPolygonVertex.controller.base";

@swagger.ApiTags("areaTriggerCreatePropertiesPolygonVertices")
@common.Controller("areaTriggerCreatePropertiesPolygonVertices")
export class AreaTriggerCreatePropertiesPolygonVertexController extends AreaTriggerCreatePropertiesPolygonVertexControllerBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertiesPolygonVertexService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
