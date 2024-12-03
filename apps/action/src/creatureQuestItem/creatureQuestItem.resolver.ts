import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureQuestItemResolverBase } from "./base/creatureQuestItem.resolver.base";
import { CreatureQuestItem } from "./base/CreatureQuestItem";
import { CreatureQuestItemService } from "./creatureQuestItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureQuestItem)
export class CreatureQuestItemResolver extends CreatureQuestItemResolverBase {
  constructor(
    protected readonly service: CreatureQuestItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
