import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BattlePetQualityResolverBase } from "./base/battlePetQuality.resolver.base";
import { BattlePetQuality } from "./base/BattlePetQuality";
import { BattlePetQualityService } from "./battlePetQuality.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BattlePetQuality)
export class BattlePetQualityResolver extends BattlePetQualityResolverBase {
  constructor(
    protected readonly service: BattlePetQualityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
