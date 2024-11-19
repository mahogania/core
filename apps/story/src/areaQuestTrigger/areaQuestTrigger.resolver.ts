import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaQuestTriggerResolverBase } from "./base/areaQuestTrigger.resolver.base";
import { AreaQuestTrigger } from "./base/AreaQuestTrigger";
import { AreaQuestTriggerService } from "./areaQuestTrigger.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaQuestTrigger)
export class AreaQuestTriggerResolver extends AreaQuestTriggerResolverBase {
  constructor(
    protected readonly service: AreaQuestTriggerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
