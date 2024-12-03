import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SpellAreaResolverBase } from "./base/spellArea.resolver.base";
import { SpellArea } from "./base/SpellArea";
import { SpellAreaService } from "./spellArea.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SpellArea)
export class SpellAreaResolver extends SpellAreaResolverBase {
  constructor(
    protected readonly service: SpellAreaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
