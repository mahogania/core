import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GossipMenuOptionLocaleResolverBase } from "./base/gossipMenuOptionLocale.resolver.base";
import { GossipMenuOptionLocale } from "./base/GossipMenuOptionLocale";
import { GossipMenuOptionLocaleService } from "./gossipMenuOptionLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GossipMenuOptionLocale)
export class GossipMenuOptionLocaleResolver extends GossipMenuOptionLocaleResolverBase {
  constructor(
    protected readonly service: GossipMenuOptionLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
