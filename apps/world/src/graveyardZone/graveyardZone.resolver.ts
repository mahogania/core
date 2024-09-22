import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GraveyardZoneResolverBase } from "./base/graveyardZone.resolver.base";
import { GraveyardZone } from "./base/GraveyardZone";
import { GraveyardZoneService } from "./graveyardZone.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GraveyardZone)
export class GraveyardZoneResolver extends GraveyardZoneResolverBase {
  constructor(
    protected readonly service: GraveyardZoneService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
