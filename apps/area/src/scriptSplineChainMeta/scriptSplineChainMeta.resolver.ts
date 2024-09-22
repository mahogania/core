import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScriptSplineChainMetaResolverBase } from "./base/scriptSplineChainMeta.resolver.base";
import { ScriptSplineChainMeta } from "./base/ScriptSplineChainMeta";
import { ScriptSplineChainMetaService } from "./scriptSplineChainMeta.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScriptSplineChainMeta)
export class ScriptSplineChainMetaResolver extends ScriptSplineChainMetaResolverBase {
  constructor(
    protected readonly service: ScriptSplineChainMetaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
