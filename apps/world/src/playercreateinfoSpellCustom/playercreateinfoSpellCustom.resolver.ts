import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayercreateinfoSpellCustomResolverBase } from "./base/playercreateinfoSpellCustom.resolver.base";
import { PlayercreateinfoSpellCustom } from "./base/PlayercreateinfoSpellCustom";
import { PlayercreateinfoSpellCustomService } from "./playercreateinfoSpellCustom.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayercreateinfoSpellCustom)
export class PlayercreateinfoSpellCustomResolver extends PlayercreateinfoSpellCustomResolverBase {
  constructor(
    protected readonly service: PlayercreateinfoSpellCustomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
