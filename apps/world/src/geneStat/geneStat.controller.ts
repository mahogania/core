import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GeneStatService } from "./geneStat.service";
import { GeneStatControllerBase } from "./base/geneStat.controller.base";

@swagger.ApiTags("geneStats")
@common.Controller("geneStats")
export class GeneStatController extends GeneStatControllerBase {
  constructor(
    protected readonly service: GeneStatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
