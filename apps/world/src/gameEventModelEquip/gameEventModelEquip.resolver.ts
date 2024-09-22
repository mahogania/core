import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventModelEquipResolverBase } from "./base/gameEventModelEquip.resolver.base";
import { GameEventModelEquip } from "./base/GameEventModelEquip";
import { GameEventModelEquipService } from "./gameEventModelEquip.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventModelEquip)
export class GameEventModelEquipResolver extends GameEventModelEquipResolverBase {
  constructor(
    protected readonly service: GameEventModelEquipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
