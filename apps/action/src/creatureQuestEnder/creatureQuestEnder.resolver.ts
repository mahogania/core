import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureQuestEnderResolverBase } from "./base/creatureQuestEnder.resolver.base";
import { CreatureQuestEnder } from "./base/CreatureQuestEnder";
import { CreatureQuestEnderService } from "./creatureQuestEnder.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureQuestEnder)
export class CreatureQuestEnderResolver extends CreatureQuestEnderResolverBase {
  constructor(
    protected readonly service: CreatureQuestEnderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
