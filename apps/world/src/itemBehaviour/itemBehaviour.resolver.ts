import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItemBehaviourResolverBase } from "./base/itemBehaviour.resolver.base";
import { ItemBehaviour } from "./base/ItemBehaviour";
import { ItemBehaviourService } from "./itemBehaviour.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemBehaviour)
export class ItemBehaviourResolver extends ItemBehaviourResolverBase {
  constructor(
    protected readonly service: ItemBehaviourService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
