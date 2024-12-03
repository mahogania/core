import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScriptSplineChainMetaService } from "./scriptSplineChainMeta.service";
import { ScriptSplineChainMetaControllerBase } from "./base/scriptSplineChainMeta.controller.base";

@swagger.ApiTags("scriptSplineChainMetas")
@common.Controller("scriptSplineChainMetas")
export class ScriptSplineChainMetaController extends ScriptSplineChainMetaControllerBase {
  constructor(
    protected readonly service: ScriptSplineChainMetaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
