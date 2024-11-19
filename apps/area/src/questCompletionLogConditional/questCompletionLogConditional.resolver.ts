import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestCompletionLogConditionalResolverBase } from "./base/questCompletionLogConditional.resolver.base";
import { QuestCompletionLogConditional } from "./base/QuestCompletionLogConditional";
import { QuestCompletionLogConditionalService } from "./questCompletionLogConditional.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestCompletionLogConditional)
export class QuestCompletionLogConditionalResolver extends QuestCompletionLogConditionalResolverBase {
  constructor(
    protected readonly service: QuestCompletionLogConditionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
