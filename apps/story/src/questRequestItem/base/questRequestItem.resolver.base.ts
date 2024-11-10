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
import { QuestRequestItem } from "./QuestRequestItem";
import { QuestRequestItemCountArgs } from "./QuestRequestItemCountArgs";
import { QuestRequestItemFindManyArgs } from "./QuestRequestItemFindManyArgs";
import { QuestRequestItemFindUniqueArgs } from "./QuestRequestItemFindUniqueArgs";
import { CreateQuestRequestItemArgs } from "./CreateQuestRequestItemArgs";
import { UpdateQuestRequestItemArgs } from "./UpdateQuestRequestItemArgs";
import { DeleteQuestRequestItemArgs } from "./DeleteQuestRequestItemArgs";
import { QuestRequestItemConditionalFindManyArgs } from "../../questRequestItemConditional/base/QuestRequestItemConditionalFindManyArgs";
import { QuestRequestItemConditional } from "../../questRequestItemConditional/base/QuestRequestItemConditional";
import { QuestRequestItemsLocaleFindManyArgs } from "../../questRequestItemsLocale/base/QuestRequestItemsLocaleFindManyArgs";
import { QuestRequestItemsLocale } from "../../questRequestItemsLocale/base/QuestRequestItemsLocale";
import { QuestTemplateFindManyArgs } from "../../questTemplate/base/QuestTemplateFindManyArgs";
import { QuestTemplate } from "../../questTemplate/base/QuestTemplate";
import { QuestRequestItemService } from "../questRequestItem.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRequestItem)
export class QuestRequestItemResolverBase {
  constructor(
    protected readonly service: QuestRequestItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "read",
    possession: "any",
  })
  async _questRequestItemsMeta(
    @graphql.Args() args: QuestRequestItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QuestRequestItem])
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "read",
    possession: "any",
  })
  async questRequestItems(
    @graphql.Args() args: QuestRequestItemFindManyArgs
  ): Promise<QuestRequestItem[]> {
    return this.service.questRequestItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QuestRequestItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "read",
    possession: "own",
  })
  async questRequestItem(
    @graphql.Args() args: QuestRequestItemFindUniqueArgs
  ): Promise<QuestRequestItem | null> {
    const result = await this.service.questRequestItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QuestRequestItem)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "create",
    possession: "any",
  })
  async createQuestRequestItem(
    @graphql.Args() args: CreateQuestRequestItemArgs
  ): Promise<QuestRequestItem> {
    return await this.service.createQuestRequestItem({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QuestRequestItem)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "update",
    possession: "any",
  })
  async updateQuestRequestItem(
    @graphql.Args() args: UpdateQuestRequestItemArgs
  ): Promise<QuestRequestItem | null> {
    try {
      return await this.service.updateQuestRequestItem({
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

  @graphql.Mutation(() => QuestRequestItem)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "delete",
    possession: "any",
  })
  async deleteQuestRequestItem(
    @graphql.Args() args: DeleteQuestRequestItemArgs
  ): Promise<QuestRequestItem | null> {
    try {
      return await this.service.deleteQuestRequestItem(args);
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
  @graphql.ResolveField(() => [QuestRequestItemConditional], {
    name: "questRequestItemConditionals",
  })
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItemConditional",
    action: "read",
    possession: "any",
  })
  async findQuestRequestItemConditionals(
    @graphql.Parent() parent: QuestRequestItem,
    @graphql.Args() args: QuestRequestItemConditionalFindManyArgs
  ): Promise<QuestRequestItemConditional[]> {
    const results = await this.service.findQuestRequestItemConditionals(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [QuestRequestItemsLocale], {
    name: "questRequestItemsLocales",
  })
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItemsLocale",
    action: "read",
    possession: "any",
  })
  async findQuestRequestItemsLocales(
    @graphql.Parent() parent: QuestRequestItem,
    @graphql.Args() args: QuestRequestItemsLocaleFindManyArgs
  ): Promise<QuestRequestItemsLocale[]> {
    const results = await this.service.findQuestRequestItemsLocales(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [QuestTemplate], { name: "questTemplates" })
  @nestAccessControl.UseRoles({
    resource: "QuestTemplate",
    action: "read",
    possession: "any",
  })
  async findQuestTemplates(
    @graphql.Parent() parent: QuestRequestItem,
    @graphql.Args() args: QuestTemplateFindManyArgs
  ): Promise<QuestTemplate[]> {
    const results = await this.service.findQuestTemplates(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}