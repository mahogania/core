import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestObjectivesLocaleResolverBase } from "./base/questObjectivesLocale.resolver.base";
import { QuestObjectivesLocale } from "./base/QuestObjectivesLocale";
import { QuestObjectivesLocaleService } from "./questObjectivesLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestObjectivesLocale)
export class QuestObjectivesLocaleResolver extends QuestObjectivesLocaleResolverBase {
  constructor(
    protected readonly service: QuestObjectivesLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
