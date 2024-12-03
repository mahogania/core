import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestCueEffectResolverBase } from "./base/questCueEffect.resolver.base";
import { QuestCueEffect } from "./base/QuestCueEffect";
import { QuestCueEffectService } from "./questCueEffect.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestCueEffect)
export class QuestCueEffectResolver extends QuestCueEffectResolverBase {
  constructor(
    protected readonly service: QuestCueEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
