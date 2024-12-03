import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestRewardDisplaySpellResolverBase } from "./base/questRewardDisplaySpell.resolver.base";
import { QuestRewardDisplaySpell } from "./base/QuestRewardDisplaySpell";
import { QuestRewardDisplaySpellService } from "./questRewardDisplaySpell.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRewardDisplaySpell)
export class QuestRewardDisplaySpellResolver extends QuestRewardDisplaySpellResolverBase {
  constructor(
    protected readonly service: QuestRewardDisplaySpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
