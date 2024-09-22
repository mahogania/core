import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NpcVendorResolverBase } from "./base/npcVendor.resolver.base";
import { NpcVendor } from "./base/NpcVendor";
import { NpcVendorService } from "./npcVendor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NpcVendor)
export class NpcVendorResolver extends NpcVendorResolverBase {
  constructor(
    protected readonly service: NpcVendorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
