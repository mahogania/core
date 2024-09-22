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
import { GameObjectTemplate } from "./GameObjectTemplate";
import { GameObjectTemplateCountArgs } from "./GameObjectTemplateCountArgs";
import { GameObjectTemplateFindManyArgs } from "./GameObjectTemplateFindManyArgs";
import { GameObjectTemplateFindUniqueArgs } from "./GameObjectTemplateFindUniqueArgs";
import { DeleteGameObjectTemplateArgs } from "./DeleteGameObjectTemplateArgs";
import { GameObjectTemplateService } from "../gameObjectTemplate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectTemplate)
export class GameObjectTemplateResolverBase {
  constructor(
    protected readonly service: GameObjectTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplate",
    action: "read",
    possession: "any",
  })
  async _gameObjectTemplatesMeta(
    @graphql.Args() args: GameObjectTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GameObjectTemplate])
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplate",
    action: "read",
    possession: "any",
  })
  async gameObjectTemplates(
    @graphql.Args() args: GameObjectTemplateFindManyArgs
  ): Promise<GameObjectTemplate[]> {
    return this.service.gameObjectTemplates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GameObjectTemplate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplate",
    action: "read",
    possession: "own",
  })
  async gameObjectTemplate(
    @graphql.Args() args: GameObjectTemplateFindUniqueArgs
  ): Promise<GameObjectTemplate | null> {
    const result = await this.service.gameObjectTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => GameObjectTemplate)
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplate",
    action: "delete",
    possession: "any",
  })
  async deleteGameObjectTemplate(
    @graphql.Args() args: DeleteGameObjectTemplateArgs
  ): Promise<GameObjectTemplate | null> {
    try {
      return await this.service.deleteGameObjectTemplate(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
