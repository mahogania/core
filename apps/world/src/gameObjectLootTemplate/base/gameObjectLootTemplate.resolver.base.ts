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
import { GameObjectLootTemplate } from "./GameObjectLootTemplate";
import { GameObjectLootTemplateCountArgs } from "./GameObjectLootTemplateCountArgs";
import { GameObjectLootTemplateFindManyArgs } from "./GameObjectLootTemplateFindManyArgs";
import { GameObjectLootTemplateFindUniqueArgs } from "./GameObjectLootTemplateFindUniqueArgs";
import { CreateGameObjectLootTemplateArgs } from "./CreateGameObjectLootTemplateArgs";
import { UpdateGameObjectLootTemplateArgs } from "./UpdateGameObjectLootTemplateArgs";
import { DeleteGameObjectLootTemplateArgs } from "./DeleteGameObjectLootTemplateArgs";
import { LootTemplate } from "../../lootTemplate/base/LootTemplate";
import { GameObjectLootTemplateService } from "../gameObjectLootTemplate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectLootTemplate)
export class GameObjectLootTemplateResolverBase {
  constructor(
    protected readonly service: GameObjectLootTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GameObjectLootTemplate",
    action: "read",
    possession: "any",
  })
  async _gameObjectLootTemplatesMeta(
    @graphql.Args() args: GameObjectLootTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GameObjectLootTemplate])
  @nestAccessControl.UseRoles({
    resource: "GameObjectLootTemplate",
    action: "read",
    possession: "any",
  })
  async gameObjectLootTemplates(
    @graphql.Args() args: GameObjectLootTemplateFindManyArgs
  ): Promise<GameObjectLootTemplate[]> {
    return this.service.gameObjectLootTemplates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GameObjectLootTemplate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GameObjectLootTemplate",
    action: "read",
    possession: "own",
  })
  async gameObjectLootTemplate(
    @graphql.Args() args: GameObjectLootTemplateFindUniqueArgs
  ): Promise<GameObjectLootTemplate | null> {
    const result = await this.service.gameObjectLootTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GameObjectLootTemplate)
  @nestAccessControl.UseRoles({
    resource: "GameObjectLootTemplate",
    action: "create",
    possession: "any",
  })
  async createGameObjectLootTemplate(
    @graphql.Args() args: CreateGameObjectLootTemplateArgs
  ): Promise<GameObjectLootTemplate> {
    return await this.service.createGameObjectLootTemplate({
      ...args,
      data: {
        ...args.data,

        lootTemplate: args.data.lootTemplate
          ? {
              connect: args.data.lootTemplate,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GameObjectLootTemplate)
  @nestAccessControl.UseRoles({
    resource: "GameObjectLootTemplate",
    action: "update",
    possession: "any",
  })
  async updateGameObjectLootTemplate(
    @graphql.Args() args: UpdateGameObjectLootTemplateArgs
  ): Promise<GameObjectLootTemplate | null> {
    try {
      return await this.service.updateGameObjectLootTemplate({
        ...args,
        data: {
          ...args.data,

          lootTemplate: args.data.lootTemplate
            ? {
                connect: args.data.lootTemplate,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => GameObjectLootTemplate)
  @nestAccessControl.UseRoles({
    resource: "GameObjectLootTemplate",
    action: "delete",
    possession: "any",
  })
  async deleteGameObjectLootTemplate(
    @graphql.Args() args: DeleteGameObjectLootTemplateArgs
  ): Promise<GameObjectLootTemplate | null> {
    try {
      return await this.service.deleteGameObjectLootTemplate(args);
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
  @graphql.ResolveField(() => LootTemplate, {
    nullable: true,
    name: "lootTemplate",
  })
  @nestAccessControl.UseRoles({
    resource: "LootTemplate",
    action: "read",
    possession: "any",
  })
  async getLootTemplate(
    @graphql.Parent() parent: GameObjectLootTemplate
  ): Promise<LootTemplate | null> {
    const result = await this.service.getLootTemplate(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
