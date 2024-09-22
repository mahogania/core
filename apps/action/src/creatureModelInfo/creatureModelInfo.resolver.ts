import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureModelInfoResolverBase } from "./base/creatureModelInfo.resolver.base";
import { CreatureModelInfo } from "./base/CreatureModelInfo";
import { CreatureModelInfoService } from "./creatureModelInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureModelInfo)
export class CreatureModelInfoResolver extends CreatureModelInfoResolverBase {
  constructor(
    protected readonly service: CreatureModelInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
