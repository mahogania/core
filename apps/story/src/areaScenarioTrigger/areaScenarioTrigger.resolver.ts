import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaScenarioTriggerResolverBase } from "./base/areaScenarioTrigger.resolver.base";
import { AreaScenarioTrigger } from "./base/AreaScenarioTrigger";
import { AreaScenarioTriggerService } from "./areaScenarioTrigger.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaScenarioTrigger)
export class AreaScenarioTriggerResolver extends AreaScenarioTriggerResolverBase {
  constructor(
    protected readonly service: AreaScenarioTriggerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
