import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureTemplateResolverBase } from "./base/creatureTemplate.resolver.base";
import { CreatureTemplate } from "./base/CreatureTemplate";
import { CreatureTemplateService } from "./creatureTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplate)
export class CreatureTemplateResolver extends CreatureTemplateResolverBase {
  constructor(
    protected readonly service: CreatureTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
