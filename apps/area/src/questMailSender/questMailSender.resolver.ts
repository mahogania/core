import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestMailSenderResolverBase } from "./base/questMailSender.resolver.base";
import { QuestMailSender } from "./base/QuestMailSender";
import { QuestMailSenderService } from "./questMailSender.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestMailSender)
export class QuestMailSenderResolver extends QuestMailSenderResolverBase {
  constructor(
    protected readonly service: QuestMailSenderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
