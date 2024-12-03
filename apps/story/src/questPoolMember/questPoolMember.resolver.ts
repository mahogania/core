import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestPoolMemberResolverBase } from "./base/questPoolMember.resolver.base";
import { QuestPoolMember } from "./base/QuestPoolMember";
import { QuestPoolMemberService } from "./questPoolMember.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestPoolMember)
export class QuestPoolMemberResolver extends QuestPoolMemberResolverBase {
  constructor(
    protected readonly service: QuestPoolMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
