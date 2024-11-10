import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventCharacterResolverBase } from "./base/gameEventCharacter.resolver.base";
import { GameEventCharacter } from "./base/GameEventCharacter";
import { GameEventCharacterService } from "./gameEventCharacter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventCharacter)
export class GameEventCharacterResolver extends GameEventCharacterResolverBase {
  constructor(
    protected readonly service: GameEventCharacterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
