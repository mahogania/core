import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MillingLootTemplateResolverBase } from "./base/millingLootTemplate.resolver.base";
import { MillingLootTemplate } from "./base/MillingLootTemplate";
import { MillingLootTemplateService } from "./millingLootTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MillingLootTemplate)
export class MillingLootTemplateResolver extends MillingLootTemplateResolverBase {
  constructor(
    protected readonly service: MillingLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
