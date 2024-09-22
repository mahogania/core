import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItemLootTemplateResolverBase } from "./base/itemLootTemplate.resolver.base";
import { ItemLootTemplate } from "./base/ItemLootTemplate";
import { ItemLootTemplateService } from "./itemLootTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemLootTemplate)
export class ItemLootTemplateResolver extends ItemLootTemplateResolverBase {
  constructor(
    protected readonly service: ItemLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
