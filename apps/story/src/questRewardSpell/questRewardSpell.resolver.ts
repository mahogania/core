import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestRewardSpellResolverBase } from "./base/questRewardSpell.resolver.base";
import { QuestRewardSpell } from "./base/QuestRewardSpell";
import { QuestRewardSpellService } from "./questRewardSpell.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRewardSpell)
export class QuestRewardSpellResolver extends QuestRewardSpellResolverBase {
  constructor(
    protected readonly service: QuestRewardSpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
