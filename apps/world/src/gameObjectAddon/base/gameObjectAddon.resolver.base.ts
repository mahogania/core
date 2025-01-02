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
import { GameObjectAddon } from "./GameObjectAddon";
import { GameObjectAddonCountArgs } from "./GameObjectAddonCountArgs";
import { GameObjectAddonFindManyArgs } from "./GameObjectAddonFindManyArgs";
import { GameObjectAddonFindUniqueArgs } from "./GameObjectAddonFindUniqueArgs";
import { CreateGameObjectAddonArgs } from "./CreateGameObjectAddonArgs";
import { UpdateGameObjectAddonArgs } from "./UpdateGameObjectAddonArgs";
import { DeleteGameObjectAddonArgs } from "./DeleteGameObjectAddonArgs";
import { GameObjectAddonService } from "../gameObjectAddon.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectAddon)
export class GameObjectAddonResolverBase {
  constructor(
    protected readonly service: GameObjectAddonService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GameObjectAddon",
    action: "read",
    possession: "any",
  })
  async _gameObjectAddonsMeta(
    @graphql.Args() args: GameObjectAddonCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GameObjectAddon])
  @nestAccessControl.UseRoles({
    resource: "GameObjectAddon",
    action: "read",
    possession: "any",
  })
  async gameObjectAddons(
    @graphql.Args() args: GameObjectAddonFindManyArgs
  ): Promise<GameObjectAddon[]> {
    return this.service.gameObjectAddons(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GameObjectAddon, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GameObjectAddon",
    action: "read",
    possession: "own",
  })
  async gameObjectAddon(
    @graphql.Args() args: GameObjectAddonFindUniqueArgs
  ): Promise<GameObjectAddon | null> {
    const result = await this.service.gameObjectAddon(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GameObjectAddon)
  @nestAccessControl.UseRoles({
    resource: "GameObjectAddon",
    action: "create",
    possession: "any",
  })
  async createGameObjectAddon(
    @graphql.Args() args: CreateGameObjectAddonArgs
  ): Promise<GameObjectAddon> {
    return await this.service.createGameObjectAddon({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GameObjectAddon)
  @nestAccessControl.UseRoles({
    resource: "GameObjectAddon",
    action: "update",
    possession: "any",
  })
  async updateGameObjectAddon(
    @graphql.Args() args: UpdateGameObjectAddonArgs
  ): Promise<GameObjectAddon | null> {
    try {
      return await this.service.updateGameObjectAddon({
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

  @graphql.Mutation(() => GameObjectAddon)
  @nestAccessControl.UseRoles({
    resource: "GameObjectAddon",
    action: "delete",
    possession: "any",
  })
  async deleteGameObjectAddon(
    @graphql.Args() args: DeleteGameObjectAddonArgs
  ): Promise<GameObjectAddon | null> {
    try {
      return await this.service.deleteGameObjectAddon(args);
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