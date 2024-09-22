import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureTemplateGossipResolverBase } from "./base/creatureTemplateGossip.resolver.base";
import { CreatureTemplateGossip } from "./base/CreatureTemplateGossip";
import { CreatureTemplateGossipService } from "./creatureTemplateGossip.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplateGossip)
export class CreatureTemplateGossipResolver extends CreatureTemplateGossipResolverBase {
  constructor(
    protected readonly service: CreatureTemplateGossipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
