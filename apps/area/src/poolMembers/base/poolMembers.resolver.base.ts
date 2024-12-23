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
import { PoolMembers } from "./PoolMembers";
import { PoolMembersCountArgs } from "./PoolMembersCountArgs";
import { PoolMembersFindManyArgs } from "./PoolMembersFindManyArgs";
import { PoolMembersFindUniqueArgs } from "./PoolMembersFindUniqueArgs";
import { DeletePoolMembersArgs } from "./DeletePoolMembersArgs";
import { PoolMembersService } from "../poolMembers.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PoolMembers)
export class PoolMembersResolverBase {
  constructor(
    protected readonly service: PoolMembersService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PoolMembers",
    action: "read",
    possession: "any",
  })
  async _poolMembersItemsMeta(
    @graphql.Args() args: PoolMembersCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PoolMembers])
  @nestAccessControl.UseRoles({
    resource: "PoolMembers",
    action: "read",
    possession: "any",
  })
  async poolMembersItems(
    @graphql.Args() args: PoolMembersFindManyArgs
  ): Promise<PoolMembers[]> {
    return this.service.poolMembersItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PoolMembers, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PoolMembers",
    action: "read",
    possession: "own",
  })
  async poolMembers(
    @graphql.Args() args: PoolMembersFindUniqueArgs
  ): Promise<PoolMembers | null> {
    const result = await this.service.poolMembers(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PoolMembers)
  @nestAccessControl.UseRoles({
    resource: "PoolMembers",
    action: "delete",
    possession: "any",
  })
  async deletePoolMembers(
    @graphql.Args() args: DeletePoolMembersArgs
  ): Promise<PoolMembers | null> {
    try {
      return await this.service.deletePoolMembers(args);
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
