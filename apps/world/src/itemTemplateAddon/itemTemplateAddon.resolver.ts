import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItemTemplateAddonResolverBase } from "./base/itemTemplateAddon.resolver.base";
import { ItemTemplateAddon } from "./base/ItemTemplateAddon";
import { ItemTemplateAddonService } from "./itemTemplateAddon.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemTemplateAddon)
export class ItemTemplateAddonResolver extends ItemTemplateAddonResolverBase {
  constructor(
    protected readonly service: ItemTemplateAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
