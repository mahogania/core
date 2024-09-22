import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GossipMenuOptionService } from "./gossipMenuOption.service";
import { GossipMenuOptionControllerBase } from "./base/gossipMenuOption.controller.base";

@swagger.ApiTags("gossipMenuOptions")
@common.Controller("gossipMenuOptions")
export class GossipMenuOptionController extends GossipMenuOptionControllerBase {
  constructor(
    protected readonly service: GossipMenuOptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
