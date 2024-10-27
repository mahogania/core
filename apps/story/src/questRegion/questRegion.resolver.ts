import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestRegionResolverBase } from "./base/questRegion.resolver.base";
import { QuestRegion } from "./base/QuestRegion";
import { QuestRegionService } from "./questRegion.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRegion)
export class QuestRegionResolver extends QuestRegionResolverBase {
  constructor(
    protected readonly service: QuestRegionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
