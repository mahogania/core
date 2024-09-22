import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaTriggerInvolvedRelationResolverBase } from "./base/areaTriggerInvolvedRelation.resolver.base";
import { AreaTriggerInvolvedRelation } from "./base/AreaTriggerInvolvedRelation";
import { AreaTriggerInvolvedRelationService } from "./areaTriggerInvolvedRelation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTriggerInvolvedRelation)
export class AreaTriggerInvolvedRelationResolver extends AreaTriggerInvolvedRelationResolverBase {
  constructor(
    protected readonly service: AreaTriggerInvolvedRelationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
