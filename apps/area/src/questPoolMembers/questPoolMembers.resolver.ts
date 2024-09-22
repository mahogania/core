import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestPoolMembersResolverBase } from "./base/questPoolMembers.resolver.base";
import { QuestPoolMembers } from "./base/QuestPoolMembers";
import { QuestPoolMembersService } from "./questPoolMembers.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestPoolMembers)
export class QuestPoolMembersResolver extends QuestPoolMembersResolverBase {
  constructor(
    protected readonly service: QuestPoolMembersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
