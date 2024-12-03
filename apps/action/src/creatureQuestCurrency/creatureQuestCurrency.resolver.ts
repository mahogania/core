import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureQuestCurrencyResolverBase } from "./base/creatureQuestCurrency.resolver.base";
import { CreatureQuestCurrency } from "./base/CreatureQuestCurrency";
import { CreatureQuestCurrencyService } from "./creatureQuestCurrency.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureQuestCurrency)
export class CreatureQuestCurrencyResolver extends CreatureQuestCurrencyResolverBase {
  constructor(
    protected readonly service: CreatureQuestCurrencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
