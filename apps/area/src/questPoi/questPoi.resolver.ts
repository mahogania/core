import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestPoiResolverBase } from "./base/questPoi.resolver.base";
import { QuestPoi } from "./base/QuestPoi";
import { QuestPoiService } from "./questPoi.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestPoi)
export class QuestPoiResolver extends QuestPoiResolverBase {
  constructor(
    protected readonly service: QuestPoiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
