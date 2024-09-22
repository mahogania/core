import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureSummonGroupsResolverBase } from "./base/creatureSummonGroups.resolver.base";
import { CreatureSummonGroups } from "./base/CreatureSummonGroups";
import { CreatureSummonGroupsService } from "./creatureSummonGroups.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureSummonGroups)
export class CreatureSummonGroupsResolver extends CreatureSummonGroupsResolverBase {
  constructor(
    protected readonly service: CreatureSummonGroupsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
