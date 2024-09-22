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
import { GameObjectTemplateLocale } from "./GameObjectTemplateLocale";
import { GameObjectTemplateLocaleCountArgs } from "./GameObjectTemplateLocaleCountArgs";
import { GameObjectTemplateLocaleFindManyArgs } from "./GameObjectTemplateLocaleFindManyArgs";
import { GameObjectTemplateLocaleFindUniqueArgs } from "./GameObjectTemplateLocaleFindUniqueArgs";
import { DeleteGameObjectTemplateLocaleArgs } from "./DeleteGameObjectTemplateLocaleArgs";
import { GameObjectTemplateLocaleService } from "../gameObjectTemplateLocale.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectTemplateLocale)
export class GameObjectTemplateLocaleResolverBase {
  constructor(
    protected readonly service: GameObjectTemplateLocaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplateLocale",
    action: "read",
    possession: "any",
  })
  async _gameObjectTemplateLocalesMeta(
    @graphql.Args() args: GameObjectTemplateLocaleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GameObjectTemplateLocale])
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplateLocale",
    action: "read",
    possession: "any",
  })
  async gameObjectTemplateLocales(
    @graphql.Args() args: GameObjectTemplateLocaleFindManyArgs
  ): Promise<GameObjectTemplateLocale[]> {
    return this.service.gameObjectTemplateLocales(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GameObjectTemplateLocale, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplateLocale",
    action: "read",
    possession: "own",
  })
  async gameObjectTemplateLocale(
    @graphql.Args() args: GameObjectTemplateLocaleFindUniqueArgs
  ): Promise<GameObjectTemplateLocale | null> {
    const result = await this.service.gameObjectTemplateLocale(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => GameObjectTemplateLocale)
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplateLocale",
    action: "delete",
    possession: "any",
  })
  async deleteGameObjectTemplateLocale(
    @graphql.Args() args: DeleteGameObjectTemplateLocaleArgs
  ): Promise<GameObjectTemplateLocale | null> {
    try {
      return await this.service.deleteGameObjectTemplateLocale(args);
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
