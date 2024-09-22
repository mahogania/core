import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItemScriptNamesResolverBase } from "./base/itemScriptNames.resolver.base";
import { ItemScriptNames } from "./base/ItemScriptNames";
import { ItemScriptNamesService } from "./itemScriptNames.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemScriptNames)
export class ItemScriptNamesResolver extends ItemScriptNamesResolverBase {
  constructor(
    protected readonly service: ItemScriptNamesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
