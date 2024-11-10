/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CharacterDialogue } from "./CharacterDialogue";
import { CharacterDialogueCountArgs } from "./CharacterDialogueCountArgs";
import { CharacterDialogueFindManyArgs } from "./CharacterDialogueFindManyArgs";
import { CharacterDialogueFindUniqueArgs } from "./CharacterDialogueFindUniqueArgs";
import { CreateCharacterDialogueArgs } from "./CreateCharacterDialogueArgs";
import { UpdateCharacterDialogueArgs } from "./UpdateCharacterDialogueArgs";
import { DeleteCharacterDialogueArgs } from "./DeleteCharacterDialogueArgs";
import { CharacterFindManyArgs } from "../../character/base/CharacterFindManyArgs";
import { Character } from "../../character/base/Character";
import { ParagraphFindManyArgs } from "../../paragraph/base/ParagraphFindManyArgs";
import { Paragraph } from "../../paragraph/base/Paragraph";
import { CharacterDialogueService } from "../characterDialogue.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CharacterDialogue)
export class CharacterDialogueResolverBase {
  constructor(
    protected readonly service: CharacterDialogueService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CharacterDialogue",
    action: "read",
    possession: "any",
  })
  async _characterDialoguesMeta(
    @graphql.Args() args: CharacterDialogueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CharacterDialogue])
  @nestAccessControl.UseRoles({
    resource: "CharacterDialogue",
    action: "read",
    possession: "any",
  })
  async characterDialogues(
    @graphql.Args() args: CharacterDialogueFindManyArgs
  ): Promise<CharacterDialogue[]> {
    return this.service.characterDialogues(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CharacterDialogue, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CharacterDialogue",
    action: "read",
    possession: "own",
  })
  async characterDialogue(
    @graphql.Args() args: CharacterDialogueFindUniqueArgs
  ): Promise<CharacterDialogue | null> {
    const result = await this.service.characterDialogue(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CharacterDialogue)
  @nestAccessControl.UseRoles({
    resource: "CharacterDialogue",
    action: "create",
    possession: "any",
  })
  async createCharacterDialogue(
    @graphql.Args() args: CreateCharacterDialogueArgs
  ): Promise<CharacterDialogue> {
    return await this.service.createCharacterDialogue({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CharacterDialogue)
  @nestAccessControl.UseRoles({
    resource: "CharacterDialogue",
    action: "update",
    possession: "any",
  })
  async updateCharacterDialogue(
    @graphql.Args() args: UpdateCharacterDialogueArgs
  ): Promise<CharacterDialogue | null> {
    try {
      return await this.service.updateCharacterDialogue({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CharacterDialogue)
  @nestAccessControl.UseRoles({
    resource: "CharacterDialogue",
    action: "delete",
    possession: "any",
  })
  async deleteCharacterDialogue(
    @graphql.Args() args: DeleteCharacterDialogueArgs
  ): Promise<CharacterDialogue | null> {
    try {
      return await this.service.deleteCharacterDialogue(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Character], { name: "characters" })
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "read",
    possession: "any",
  })
  async findCharacters(
    @graphql.Parent() parent: CharacterDialogue,
    @graphql.Args() args: CharacterFindManyArgs
  ): Promise<Character[]> {
    const results = await this.service.findCharacters(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Paragraph], { name: "paragraphs" })
  @nestAccessControl.UseRoles({
    resource: "Paragraph",
    action: "read",
    possession: "any",
  })
  async findParagraphs(
    @graphql.Parent() parent: CharacterDialogue,
    @graphql.Args() args: ParagraphFindManyArgs
  ): Promise<Paragraph[]> {
    const results = await this.service.findParagraphs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}