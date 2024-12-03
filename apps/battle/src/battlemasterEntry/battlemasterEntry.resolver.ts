import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BattlemasterEntryResolverBase } from "./base/battlemasterEntry.resolver.base";
import { BattlemasterEntry } from "./base/BattlemasterEntry";
import { BattlemasterEntryService } from "./battlemasterEntry.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BattlemasterEntry)
export class BattlemasterEntryResolver extends BattlemasterEntryResolverBase {
  constructor(
    protected readonly service: BattlemasterEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
