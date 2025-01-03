import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CharacterDialogueResolverBase } from "./base/characterDialogue.resolver.base";
import { CharacterDialogue } from "./base/CharacterDialogue";
import { CharacterDialogueService } from "./characterDialogue.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CharacterDialogue)
export class CharacterDialogueResolver extends CharacterDialogueResolverBase {
  constructor(
    protected readonly service: CharacterDialogueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
