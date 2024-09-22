import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExplorationBasexpResolverBase } from "./base/explorationBasexp.resolver.base";
import { ExplorationBasexp } from "./base/ExplorationBasexp";
import { ExplorationBasexpService } from "./explorationBasexp.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExplorationBasexp)
export class ExplorationBasexpResolver extends ExplorationBasexpResolverBase {
  constructor(
    protected readonly service: ExplorationBasexpService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
