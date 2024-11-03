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
import { QuestPoolMember } from "./QuestPoolMember";
import { QuestPoolMemberCountArgs } from "./QuestPoolMemberCountArgs";
import { QuestPoolMemberFindManyArgs } from "./QuestPoolMemberFindManyArgs";
import { QuestPoolMemberFindUniqueArgs } from "./QuestPoolMemberFindUniqueArgs";
import { CreateQuestPoolMemberArgs } from "./CreateQuestPoolMemberArgs";
import { UpdateQuestPoolMemberArgs } from "./UpdateQuestPoolMemberArgs";
import { DeleteQuestPoolMemberArgs } from "./DeleteQuestPoolMemberArgs";
import { QuestPoolFindManyArgs } from "../../questPool/base/QuestPoolFindManyArgs";
import { QuestPool } from "../../questPool/base/QuestPool";
import { PoolMember } from "../../poolMember/base/PoolMember";
import { QuestPoolMemberService } from "../questPoolMember.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestPoolMember)
export class QuestPoolMemberResolverBase {
  constructor(
    protected readonly service: QuestPoolMemberService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "read",
    possession: "any",
  })
  async _questPoolMembersMeta(
    @graphql.Args() args: QuestPoolMemberCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QuestPoolMember])
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "read",
    possession: "any",
  })
  async questPoolMembers(
    @graphql.Args() args: QuestPoolMemberFindManyArgs
  ): Promise<QuestPoolMember[]> {
    return this.service.questPoolMembers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QuestPoolMember, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "read",
    possession: "own",
  })
  async questPoolMember(
    @graphql.Args() args: QuestPoolMemberFindUniqueArgs
  ): Promise<QuestPoolMember | null> {
    const result = await this.service.questPoolMember(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QuestPoolMember)
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "create",
    possession: "any",
  })
  async createQuestPoolMember(
    @graphql.Args() args: CreateQuestPoolMemberArgs
  ): Promise<QuestPoolMember> {
    return await this.service.createQuestPoolMember({
      ...args,
      data: {
        ...args.data,

        poolMember: {
          connect: args.data.poolMember,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QuestPoolMember)
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "update",
    possession: "any",
  })
  async updateQuestPoolMember(
    @graphql.Args() args: UpdateQuestPoolMemberArgs
  ): Promise<QuestPoolMember | null> {
    try {
      return await this.service.updateQuestPoolMember({
        ...args,
        data: {
          ...args.data,

          poolMember: {
            connect: args.data.poolMember,
          },
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

  @graphql.Mutation(() => QuestPoolMember)
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "delete",
    possession: "any",
  })
  async deleteQuestPoolMember(
    @graphql.Args() args: DeleteQuestPoolMemberArgs
  ): Promise<QuestPoolMember | null> {
    try {
      return await this.service.deleteQuestPoolMember(args);
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
  @graphql.ResolveField(() => [QuestPool], { name: "questPoolTemplates" })
  @nestAccessControl.UseRoles({
    resource: "QuestPool",
    action: "read",
    possession: "any",
  })
  async findQuestPoolTemplates(
    @graphql.Parent() parent: QuestPoolMember,
    @graphql.Args() args: QuestPoolFindManyArgs
  ): Promise<QuestPool[]> {
    const results = await this.service.findQuestPoolTemplates(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PoolMember, {
    nullable: true,
    name: "poolMember",
  })
  @nestAccessControl.UseRoles({
    resource: "PoolMember",
    action: "read",
    possession: "any",
  })
  async getPoolMember(
    @graphql.Parent() parent: QuestPoolMember
  ): Promise<PoolMember | null> {
    const result = await this.service.getPoolMember(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
