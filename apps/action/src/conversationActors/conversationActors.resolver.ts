import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ConversationActorsResolverBase } from "./base/conversationActors.resolver.base";
import { ConversationActors } from "./base/ConversationActors";
import { ConversationActorsService } from "./conversationActors.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ConversationActors)
export class ConversationActorsResolver extends ConversationActorsResolverBase {
  constructor(
    protected readonly service: ConversationActorsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
