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
import { CreatureClassLevelStats } from "./CreatureClassLevelStats";
import { CreatureClassLevelStatsCountArgs } from "./CreatureClassLevelStatsCountArgs";
import { CreatureClassLevelStatsFindManyArgs } from "./CreatureClassLevelStatsFindManyArgs";
import { CreatureClassLevelStatsFindUniqueArgs } from "./CreatureClassLevelStatsFindUniqueArgs";
import { CreateCreatureClassLevelStatsArgs } from "./CreateCreatureClassLevelStatsArgs";
import { UpdateCreatureClassLevelStatsArgs } from "./UpdateCreatureClassLevelStatsArgs";
import { DeleteCreatureClassLevelStatsArgs } from "./DeleteCreatureClassLevelStatsArgs";
import { CreatureClassLevelStatsService } from "../creatureClassLevelStats.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureClassLevelStats)
export class CreatureClassLevelStatsResolverBase {
  constructor(
    protected readonly service: CreatureClassLevelStatsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CreatureClassLevelStats",
    action: "read",
    possession: "any",
  })
  async _creatureClassLevelStatsItemsMeta(
    @graphql.Args() args: CreatureClassLevelStatsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CreatureClassLevelStats])
  @nestAccessControl.UseRoles({
    resource: "CreatureClassLevelStats",
    action: "read",
    possession: "any",
  })
  async creatureClassLevelStatsItems(
    @graphql.Args() args: CreatureClassLevelStatsFindManyArgs
  ): Promise<CreatureClassLevelStats[]> {
    return this.service.creatureClassLevelStatsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CreatureClassLevelStats, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CreatureClassLevelStats",
    action: "read",
    possession: "own",
  })
  async creatureClassLevelStats(
    @graphql.Args() args: CreatureClassLevelStatsFindUniqueArgs
  ): Promise<CreatureClassLevelStats | null> {
    const result = await this.service.creatureClassLevelStats(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CreatureClassLevelStats)
  @nestAccessControl.UseRoles({
    resource: "CreatureClassLevelStats",
    action: "create",
    possession: "any",
  })
  async createCreatureClassLevelStats(
    @graphql.Args() args: CreateCreatureClassLevelStatsArgs
  ): Promise<CreatureClassLevelStats> {
    return await this.service.createCreatureClassLevelStats({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CreatureClassLevelStats)
  @nestAccessControl.UseRoles({
    resource: "CreatureClassLevelStats",
    action: "update",
    possession: "any",
  })
  async updateCreatureClassLevelStats(
    @graphql.Args() args: UpdateCreatureClassLevelStatsArgs
  ): Promise<CreatureClassLevelStats | null> {
    try {
      return await this.service.updateCreatureClassLevelStats({
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

  @graphql.Mutation(() => CreatureClassLevelStats)
  @nestAccessControl.UseRoles({
    resource: "CreatureClassLevelStats",
    action: "delete",
    possession: "any",
  })
  async deleteCreatureClassLevelStats(
    @graphql.Args() args: DeleteCreatureClassLevelStatsArgs
  ): Promise<CreatureClassLevelStats | null> {
    try {
      return await this.service.deleteCreatureClassLevelStats(args);
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
