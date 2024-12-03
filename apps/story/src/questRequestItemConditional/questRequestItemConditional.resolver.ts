import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestRequestItemConditionalResolverBase } from "./base/questRequestItemConditional.resolver.base";
import { QuestRequestItemConditional } from "./base/QuestRequestItemConditional";
import { QuestRequestItemConditionalService } from "./questRequestItemConditional.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRequestItemConditional)
export class QuestRequestItemConditionalResolver extends QuestRequestItemConditionalResolverBase {
  constructor(
    protected readonly service: QuestRequestItemConditionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
