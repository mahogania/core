import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestObjectiveResolverBase } from "./base/questObjective.resolver.base";
import { QuestObjective } from "./base/QuestObjective";
import { QuestObjectiveService } from "./questObjective.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestObjective)
export class QuestObjectiveResolver extends QuestObjectiveResolverBase {
  constructor(
    protected readonly service: QuestObjectiveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
