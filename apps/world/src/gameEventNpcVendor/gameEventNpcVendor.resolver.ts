import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventNpcVendorResolverBase } from "./base/gameEventNpcVendor.resolver.base";
import { GameEventNpcVendor } from "./base/GameEventNpcVendor";
import { GameEventNpcVendorService } from "./gameEventNpcVendor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventNpcVendor)
export class GameEventNpcVendorResolver extends GameEventNpcVendorResolverBase {
  constructor(
    protected readonly service: GameEventNpcVendorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
