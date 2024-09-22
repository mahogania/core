import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureFormationsResolverBase } from "./base/creatureFormations.resolver.base";
import { CreatureFormations } from "./base/CreatureFormations";
import { CreatureFormationsService } from "./creatureFormations.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureFormations)
export class CreatureFormationsResolver extends CreatureFormationsResolverBase {
  constructor(
    protected readonly service: CreatureFormationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
