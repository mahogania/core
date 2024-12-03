import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureLootResolverBase } from "./base/creatureLoot.resolver.base";
import { CreatureLoot } from "./base/CreatureLoot";
import { CreatureLootService } from "./creatureLoot.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureLoot)
export class CreatureLootResolver extends CreatureLootResolverBase {
  constructor(
    protected readonly service: CreatureLootService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
