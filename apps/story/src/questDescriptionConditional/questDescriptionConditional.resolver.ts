import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestDescriptionConditionalResolverBase } from "./base/questDescriptionConditional.resolver.base";
import { QuestDescriptionConditional } from "./base/QuestDescriptionConditional";
import { QuestDescriptionConditionalService } from "./questDescriptionConditional.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestDescriptionConditional)
export class QuestDescriptionConditionalResolver extends QuestDescriptionConditionalResolverBase {
  constructor(
    protected readonly service: QuestDescriptionConditionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
