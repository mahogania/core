import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ChoiceLocaleResolverBase } from "./base/choiceLocale.resolver.base";
import { ChoiceLocale } from "./base/ChoiceLocale";
import { ChoiceLocaleService } from "./choiceLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChoiceLocale)
export class ChoiceLocaleResolver extends ChoiceLocaleResolverBase {
  constructor(
    protected readonly service: ChoiceLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
