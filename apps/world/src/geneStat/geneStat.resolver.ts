import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GeneStatResolverBase } from "./base/geneStat.resolver.base";
import { GeneStat } from "./base/GeneStat";
import { GeneStatService } from "./geneStat.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GeneStat)
export class GeneStatResolver extends GeneStatResolverBase {
  constructor(
    protected readonly service: GeneStatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
