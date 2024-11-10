import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureOnKillReputationResolverBase } from "./base/creatureOnKillReputation.resolver.base";
import { CreatureOnKillReputation } from "./base/CreatureOnKillReputation";
import { CreatureOnKillReputationService } from "./creatureOnKillReputation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureOnKillReputation)
export class CreatureOnKillReputationResolver extends CreatureOnKillReputationResolverBase {
  constructor(
    protected readonly service: CreatureOnKillReputationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
