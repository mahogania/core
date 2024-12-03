import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaTriggerTavernResolverBase } from "./base/areaTriggerTavern.resolver.base";
import { AreaTriggerTavern } from "./base/AreaTriggerTavern";
import { AreaTriggerTavernService } from "./areaTriggerTavern.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTriggerTavern)
export class AreaTriggerTavernResolver extends AreaTriggerTavernResolverBase {
  constructor(
    protected readonly service: AreaTriggerTavernService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
