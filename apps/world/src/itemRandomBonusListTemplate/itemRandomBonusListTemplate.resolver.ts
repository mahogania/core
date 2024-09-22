import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItemRandomBonusListTemplateResolverBase } from "./base/itemRandomBonusListTemplate.resolver.base";
import { ItemRandomBonusListTemplate } from "./base/ItemRandomBonusListTemplate";
import { ItemRandomBonusListTemplateService } from "./itemRandomBonusListTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemRandomBonusListTemplate)
export class ItemRandomBonusListTemplateResolver extends ItemRandomBonusListTemplateResolverBase {
  constructor(
    protected readonly service: ItemRandomBonusListTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
