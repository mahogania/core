import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MailLootTemplateResolverBase } from "./base/mailLootTemplate.resolver.base";
import { MailLootTemplate } from "./base/MailLootTemplate";
import { MailLootTemplateService } from "./mailLootTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MailLootTemplate)
export class MailLootTemplateResolver extends MailLootTemplateResolverBase {
  constructor(
    protected readonly service: MailLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
