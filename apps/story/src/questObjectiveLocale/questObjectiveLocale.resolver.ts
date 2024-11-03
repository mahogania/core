import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestObjectiveLocaleResolverBase } from "./base/questObjectiveLocale.resolver.base";
import { QuestObjectiveLocale } from "./base/QuestObjectiveLocale";
import { QuestObjectiveLocaleService } from "./questObjectiveLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestObjectiveLocale)
export class QuestObjectiveLocaleResolver extends QuestObjectiveLocaleResolverBase {
  constructor(
    protected readonly service: QuestObjectiveLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
