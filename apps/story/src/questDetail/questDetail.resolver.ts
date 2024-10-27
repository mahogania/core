import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestDetailResolverBase } from "./base/questDetail.resolver.base";
import { QuestDetail } from "./base/QuestDetail";
import { QuestDetailService } from "./questDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestDetail)
export class QuestDetailResolver extends QuestDetailResolverBase {
  constructor(
    protected readonly service: QuestDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
