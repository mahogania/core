import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureTextLocaleResolverBase } from "./base/creatureTextLocale.resolver.base";
import { CreatureTextLocale } from "./base/CreatureTextLocale";
import { CreatureTextLocaleService } from "./creatureTextLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTextLocale)
export class CreatureTextLocaleResolver extends CreatureTextLocaleResolverBase {
  constructor(
    protected readonly service: CreatureTextLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
