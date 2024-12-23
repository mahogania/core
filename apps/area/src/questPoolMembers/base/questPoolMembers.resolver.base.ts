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
import { QuestPoolMembers } from "./QuestPoolMembers";
import { QuestPoolMembersCountArgs } from "./QuestPoolMembersCountArgs";
import { QuestPoolMembersFindManyArgs } from "./QuestPoolMembersFindManyArgs";
import { QuestPoolMembersFindUniqueArgs } from "./QuestPoolMembersFindUniqueArgs";
import { DeleteQuestPoolMembersArgs } from "./DeleteQuestPoolMembersArgs";
import { QuestPoolMembersService } from "../questPoolMembers.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestPoolMembers)
export class QuestPoolMembersResolverBase {
  constructor(
    protected readonly service: QuestPoolMembersService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMembers",
    action: "read",
    possession: "any",
  })
  async _questPoolMembersItemsMeta(
    @graphql.Args() args: QuestPoolMembersCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QuestPoolMembers])
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMembers",
    action: "read",
    possession: "any",
  })
  async questPoolMembersItems(
    @graphql.Args() args: QuestPoolMembersFindManyArgs
  ): Promise<QuestPoolMembers[]> {
    return this.service.questPoolMembersItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QuestPoolMembers, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMembers",
    action: "read",
    possession: "own",
  })
  async questPoolMembers(
    @graphql.Args() args: QuestPoolMembersFindUniqueArgs
  ): Promise<QuestPoolMembers | null> {
    const result = await this.service.questPoolMembers(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => QuestPoolMembers)
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMembers",
    action: "delete",
    possession: "any",
  })
  async deleteQuestPoolMembers(
    @graphql.Args() args: DeleteQuestPoolMembersArgs
  ): Promise<QuestPoolMembers | null> {
    try {
      return await this.service.deleteQuestPoolMembers(args);
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
