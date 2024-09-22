import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureTemplateDifficultyResolverBase } from "./base/creatureTemplateDifficulty.resolver.base";
import { CreatureTemplateDifficulty } from "./base/CreatureTemplateDifficulty";
import { CreatureTemplateDifficultyService } from "./creatureTemplateDifficulty.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplateDifficulty)
export class CreatureTemplateDifficultyResolver extends CreatureTemplateDifficultyResolverBase {
  constructor(
    protected readonly service: CreatureTemplateDifficultyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
