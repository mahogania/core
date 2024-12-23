import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BattlePetBreedsResolverBase } from "./base/battlePetBreeds.resolver.base";
import { BattlePetBreeds } from "./base/BattlePetBreeds";
import { BattlePetBreedsService } from "./battlePetBreeds.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BattlePetBreeds)
export class BattlePetBreedsResolver extends BattlePetBreedsResolverBase {
  constructor(
    protected readonly service: BattlePetBreedsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
