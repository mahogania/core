import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestDetailsResolverBase } from "./base/questDetails.resolver.base";
import { QuestDetails } from "./base/QuestDetails";
import { QuestDetailsService } from "./questDetails.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestDetails)
export class QuestDetailsResolver extends QuestDetailsResolverBase {
  constructor(
    protected readonly service: QuestDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
