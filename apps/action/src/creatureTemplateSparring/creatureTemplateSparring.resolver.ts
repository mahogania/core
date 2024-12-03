import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureTemplateSparringResolverBase } from "./base/creatureTemplateSparring.resolver.base";
import { CreatureTemplateSparring } from "./base/CreatureTemplateSparring";
import { CreatureTemplateSparringService } from "./creatureTemplateSparring.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplateSparring)
export class CreatureTemplateSparringResolver extends CreatureTemplateSparringResolverBase {
  constructor(
    protected readonly service: CreatureTemplateSparringService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
