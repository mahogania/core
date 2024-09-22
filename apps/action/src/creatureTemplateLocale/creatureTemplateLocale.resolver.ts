import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureTemplateLocaleResolverBase } from "./base/creatureTemplateLocale.resolver.base";
import { CreatureTemplateLocale } from "./base/CreatureTemplateLocale";
import { CreatureTemplateLocaleService } from "./creatureTemplateLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplateLocale)
export class CreatureTemplateLocaleResolver extends CreatureTemplateLocaleResolverBase {
  constructor(
    protected readonly service: CreatureTemplateLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
