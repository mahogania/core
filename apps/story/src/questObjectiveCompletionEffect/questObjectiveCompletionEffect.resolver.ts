import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestObjectiveCompletionEffectResolverBase } from "./base/questObjectiveCompletionEffect.resolver.base";
import { QuestObjectiveCompletionEffect } from "./base/QuestObjectiveCompletionEffect";
import { QuestObjectiveCompletionEffectService } from "./questObjectiveCompletionEffect.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestObjectiveCompletionEffect)
export class QuestObjectiveCompletionEffectResolver extends QuestObjectiveCompletionEffectResolverBase {
  constructor(
    protected readonly service: QuestObjectiveCompletionEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
