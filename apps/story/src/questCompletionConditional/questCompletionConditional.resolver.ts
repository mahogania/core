import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestCompletionConditionalResolverBase } from "./base/questCompletionConditional.resolver.base";
import { QuestCompletionConditional } from "./base/QuestCompletionConditional";
import { QuestCompletionConditionalService } from "./questCompletionConditional.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestCompletionConditional)
export class QuestCompletionConditionalResolver extends QuestCompletionConditionalResolverBase {
  constructor(
    protected readonly service: QuestCompletionConditionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
