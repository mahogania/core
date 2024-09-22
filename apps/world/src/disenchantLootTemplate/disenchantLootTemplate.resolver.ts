import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DisenchantLootTemplateResolverBase } from "./base/disenchantLootTemplate.resolver.base";
import { DisenchantLootTemplate } from "./base/DisenchantLootTemplate";
import { DisenchantLootTemplateService } from "./disenchantLootTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DisenchantLootTemplate)
export class DisenchantLootTemplateResolver extends DisenchantLootTemplateResolverBase {
  constructor(
    protected readonly service: DisenchantLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
