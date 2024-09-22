import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FishingLootTemplateResolverBase } from "./base/fishingLootTemplate.resolver.base";
import { FishingLootTemplate } from "./base/FishingLootTemplate";
import { FishingLootTemplateService } from "./fishingLootTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FishingLootTemplate)
export class FishingLootTemplateResolver extends FishingLootTemplateResolverBase {
  constructor(
    protected readonly service: FishingLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
