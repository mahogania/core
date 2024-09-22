import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ConversationLineTemplateResolverBase } from "./base/conversationLineTemplate.resolver.base";
import { ConversationLineTemplate } from "./base/ConversationLineTemplate";
import { ConversationLineTemplateService } from "./conversationLineTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ConversationLineTemplate)
export class ConversationLineTemplateResolver extends ConversationLineTemplateResolverBase {
  constructor(
    protected readonly service: ConversationLineTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
