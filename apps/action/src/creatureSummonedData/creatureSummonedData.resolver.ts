import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureSummonedDataResolverBase } from "./base/creatureSummonedData.resolver.base";
import { CreatureSummonedData } from "./base/CreatureSummonedData";
import { CreatureSummonedDataService } from "./creatureSummonedData.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureSummonedData)
export class CreatureSummonedDataResolver extends CreatureSummonedDataResolverBase {
  constructor(
    protected readonly service: CreatureSummonedDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
