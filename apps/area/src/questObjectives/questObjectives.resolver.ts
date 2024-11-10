import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestObjectivesResolverBase } from "./base/questObjectives.resolver.base";
import { QuestObjectives } from "./base/QuestObjectives";
import { QuestObjectivesService } from "./questObjectives.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestObjectives)
export class QuestObjectivesResolver extends QuestObjectivesResolverBase {
  constructor(
    protected readonly service: QuestObjectivesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
