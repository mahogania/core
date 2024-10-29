import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItemTemplateResolverBase } from "./base/itemTemplate.resolver.base";
import { ItemTemplate } from "./base/ItemTemplate";
import { ItemTemplateService } from "./itemTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemTemplate)
export class ItemTemplateResolver extends ItemTemplateResolverBase {
  constructor(
    protected readonly service: ItemTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
