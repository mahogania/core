import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureEquipmentResolverBase } from "./base/creatureEquipment.resolver.base";
import { CreatureEquipment } from "./base/CreatureEquipment";
import { CreatureEquipmentService } from "./creatureEquipment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureEquipment)
export class CreatureEquipmentResolver extends CreatureEquipmentResolverBase {
  constructor(
    protected readonly service: CreatureEquipmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
