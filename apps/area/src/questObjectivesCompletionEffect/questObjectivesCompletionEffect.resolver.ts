import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestObjectivesCompletionEffectResolverBase } from "./base/questObjectivesCompletionEffect.resolver.base";
import { QuestObjectivesCompletionEffect } from "./base/QuestObjectivesCompletionEffect";
import { QuestObjectivesCompletionEffectService } from "./questObjectivesCompletionEffect.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestObjectivesCompletionEffect)
export class QuestObjectivesCompletionEffectResolver extends QuestObjectivesCompletionEffectResolverBase {
  constructor(
    protected readonly service: QuestObjectivesCompletionEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
