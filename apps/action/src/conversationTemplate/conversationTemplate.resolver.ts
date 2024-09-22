import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ConversationTemplateResolverBase } from "./base/conversationTemplate.resolver.base";
import { ConversationTemplate } from "./base/ConversationTemplate";
import { ConversationTemplateService } from "./conversationTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ConversationTemplate)
export class ConversationTemplateResolver extends ConversationTemplateResolverBase {
  constructor(
    protected readonly service: ConversationTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
