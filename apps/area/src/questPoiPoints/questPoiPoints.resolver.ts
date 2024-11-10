import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestPoiPointsResolverBase } from "./base/questPoiPoints.resolver.base";
import { QuestPoiPoints } from "./base/QuestPoiPoints";
import { QuestPoiPointsService } from "./questPoiPoints.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestPoiPoints)
export class QuestPoiPointsResolver extends QuestPoiPointsResolverBase {
  constructor(
    protected readonly service: QuestPoiPointsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
