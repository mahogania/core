import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GossipMenuOptionLocaleService } from "./gossipMenuOptionLocale.service";
import { GossipMenuOptionLocaleControllerBase } from "./base/gossipMenuOptionLocale.controller.base";

@swagger.ApiTags("gossipMenuOptionLocales")
@common.Controller("gossipMenuOptionLocales")
export class GossipMenuOptionLocaleController extends GossipMenuOptionLocaleControllerBase {
  constructor(
    protected readonly service: GossipMenuOptionLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
