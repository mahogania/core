import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureQuestStarterResolverBase } from "./base/creatureQuestStarter.resolver.base";
import { CreatureQuestStarter } from "./base/CreatureQuestStarter";
import { CreatureQuestStarterService } from "./creatureQuestStarter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureQuestStarter)
export class CreatureQuestStarterResolver extends CreatureQuestStarterResolverBase {
  constructor(
    protected readonly service: CreatureQuestStarterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
