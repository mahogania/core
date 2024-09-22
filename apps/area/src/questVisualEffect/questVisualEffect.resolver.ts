import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestVisualEffectResolverBase } from "./base/questVisualEffect.resolver.base";
import { QuestVisualEffect } from "./base/QuestVisualEffect";
import { QuestVisualEffectService } from "./questVisualEffect.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestVisualEffect)
export class QuestVisualEffectResolver extends QuestVisualEffectResolverBase {
  constructor(
    protected readonly service: QuestVisualEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
