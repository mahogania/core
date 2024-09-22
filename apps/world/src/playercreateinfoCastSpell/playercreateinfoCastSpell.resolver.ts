import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayercreateinfoCastSpellResolverBase } from "./base/playercreateinfoCastSpell.resolver.base";
import { PlayercreateinfoCastSpell } from "./base/PlayercreateinfoCastSpell";
import { PlayercreateinfoCastSpellService } from "./playercreateinfoCastSpell.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayercreateinfoCastSpell)
export class PlayercreateinfoCastSpellResolver extends PlayercreateinfoCastSpellResolverBase {
  constructor(
    protected readonly service: PlayercreateinfoCastSpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
