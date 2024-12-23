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
import { QuestRequestItemConditional } from "./QuestRequestItemConditional";
import { QuestRequestItemConditionalCountArgs } from "./QuestRequestItemConditionalCountArgs";
import { QuestRequestItemConditionalFindManyArgs } from "./QuestRequestItemConditionalFindManyArgs";
import { QuestRequestItemConditionalFindUniqueArgs } from "./QuestRequestItemConditionalFindUniqueArgs";
import { CreateQuestRequestItemConditionalArgs } from "./CreateQuestRequestItemConditionalArgs";
import { UpdateQuestRequestItemConditionalArgs } from "./UpdateQuestRequestItemConditionalArgs";
import { DeleteQuestRequestItemConditionalArgs } from "./DeleteQuestRequestItemConditionalArgs";
import { QuestRequestItem } from "../../questRequestItem/base/QuestRequestItem";
import { QuestRequestItemConditionalService } from "../questRequestItemConditional.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRequestItemConditional)
export class QuestRequestItemConditionalResolverBase {
  constructor(
    protected readonly service: QuestRequestItemConditionalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItemConditional",
    action: "read",
    possession: "any",
  })
  async _questRequestItemConditionalsMeta(
    @graphql.Args() args: QuestRequestItemConditionalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QuestRequestItemConditional])
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItemConditional",
    action: "read",
    possession: "any",
  })
  async questRequestItemConditionals(
    @graphql.Args() args: QuestRequestItemConditionalFindManyArgs
  ): Promise<QuestRequestItemConditional[]> {
    return this.service.questRequestItemConditionals(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QuestRequestItemConditional, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItemConditional",
    action: "read",
    possession: "own",
  })
  async questRequestItemConditional(
    @graphql.Args() args: QuestRequestItemConditionalFindUniqueArgs
  ): Promise<QuestRequestItemConditional | null> {
    const result = await this.service.questRequestItemConditional(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QuestRequestItemConditional)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItemConditional",
    action: "create",
    possession: "any",
  })
  async createQuestRequestItemConditional(
    @graphql.Args() args: CreateQuestRequestItemConditionalArgs
  ): Promise<QuestRequestItemConditional> {
    return await this.service.createQuestRequestItemConditional({
      ...args,
      data: {
        ...args.data,

        questRequestItem: args.data.questRequestItem
          ? {
              connect: args.data.questRequestItem,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QuestRequestItemConditional)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItemConditional",
    action: "update",
    possession: "any",
  })
  async updateQuestRequestItemConditional(
    @graphql.Args() args: UpdateQuestRequestItemConditionalArgs
  ): Promise<QuestRequestItemConditional | null> {
    try {
      return await this.service.updateQuestRequestItemConditional({
        ...args,
        data: {
          ...args.data,

          questRequestItem: args.data.questRequestItem
            ? {
                connect: args.data.questRequestItem,
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

  @graphql.Mutation(() => QuestRequestItemConditional)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItemConditional",
    action: "delete",
    possession: "any",
  })
  async deleteQuestRequestItemConditional(
    @graphql.Args() args: DeleteQuestRequestItemConditionalArgs
  ): Promise<QuestRequestItemConditional | null> {
    try {
      return await this.service.deleteQuestRequestItemConditional(args);
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
  @graphql.ResolveField(() => QuestRequestItem, {
    nullable: true,
    name: "questRequestItem",
  })
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "read",
    possession: "any",
  })
  async getQuestRequestItem(
    @graphql.Parent() parent: QuestRequestItemConditional
  ): Promise<QuestRequestItem | null> {
    const result = await this.service.getQuestRequestItem(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
