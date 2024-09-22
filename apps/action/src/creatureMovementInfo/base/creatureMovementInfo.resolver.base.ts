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
import { CreatureMovementInfo } from "./CreatureMovementInfo";
import { CreatureMovementInfoCountArgs } from "./CreatureMovementInfoCountArgs";
import { CreatureMovementInfoFindManyArgs } from "./CreatureMovementInfoFindManyArgs";
import { CreatureMovementInfoFindUniqueArgs } from "./CreatureMovementInfoFindUniqueArgs";
import { CreateCreatureMovementInfoArgs } from "./CreateCreatureMovementInfoArgs";
import { UpdateCreatureMovementInfoArgs } from "./UpdateCreatureMovementInfoArgs";
import { DeleteCreatureMovementInfoArgs } from "./DeleteCreatureMovementInfoArgs";
import { CreatureMovementInfoService } from "../creatureMovementInfo.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureMovementInfo)
export class CreatureMovementInfoResolverBase {
  constructor(
    protected readonly service: CreatureMovementInfoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CreatureMovementInfo",
    action: "read",
    possession: "any",
  })
  async _creatureMovementInfosMeta(
    @graphql.Args() args: CreatureMovementInfoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CreatureMovementInfo])
  @nestAccessControl.UseRoles({
    resource: "CreatureMovementInfo",
    action: "read",
    possession: "any",
  })
  async creatureMovementInfos(
    @graphql.Args() args: CreatureMovementInfoFindManyArgs
  ): Promise<CreatureMovementInfo[]> {
    return this.service.creatureMovementInfos(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CreatureMovementInfo, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CreatureMovementInfo",
    action: "read",
    possession: "own",
  })
  async creatureMovementInfo(
    @graphql.Args() args: CreatureMovementInfoFindUniqueArgs
  ): Promise<CreatureMovementInfo | null> {
    const result = await this.service.creatureMovementInfo(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CreatureMovementInfo)
  @nestAccessControl.UseRoles({
    resource: "CreatureMovementInfo",
    action: "create",
    possession: "any",
  })
  async createCreatureMovementInfo(
    @graphql.Args() args: CreateCreatureMovementInfoArgs
  ): Promise<CreatureMovementInfo> {
    return await this.service.createCreatureMovementInfo({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CreatureMovementInfo)
  @nestAccessControl.UseRoles({
    resource: "CreatureMovementInfo",
    action: "update",
    possession: "any",
  })
  async updateCreatureMovementInfo(
    @graphql.Args() args: UpdateCreatureMovementInfoArgs
  ): Promise<CreatureMovementInfo | null> {
    try {
      return await this.service.updateCreatureMovementInfo({
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

  @graphql.Mutation(() => CreatureMovementInfo)
  @nestAccessControl.UseRoles({
    resource: "CreatureMovementInfo",
    action: "delete",
    possession: "any",
  })
  async deleteCreatureMovementInfo(
    @graphql.Args() args: DeleteCreatureMovementInfoArgs
  ): Promise<CreatureMovementInfo | null> {
    try {
      return await this.service.deleteCreatureMovementInfo(args);
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
