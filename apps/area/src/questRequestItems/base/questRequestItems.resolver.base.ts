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
import { QuestRequestItems } from "./QuestRequestItems";
import { QuestRequestItemsCountArgs } from "./QuestRequestItemsCountArgs";
import { QuestRequestItemsFindManyArgs } from "./QuestRequestItemsFindManyArgs";
import { QuestRequestItemsFindUniqueArgs } from "./QuestRequestItemsFindUniqueArgs";
import { DeleteQuestRequestItemsArgs } from "./DeleteQuestRequestItemsArgs";
import { QuestRequestItemsService } from "../questRequestItems.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRequestItems)
export class QuestRequestItemsResolverBase {
  constructor(
    protected readonly service: QuestRequestItemsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItems",
    action: "read",
    possession: "any",
  })
  async _questRequestItemsItemsMeta(
    @graphql.Args() args: QuestRequestItemsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QuestRequestItems])
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItems",
    action: "read",
    possession: "any",
  })
  async questRequestItemsItems(
    @graphql.Args() args: QuestRequestItemsFindManyArgs
  ): Promise<QuestRequestItems[]> {
    return this.service.questRequestItemsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QuestRequestItems, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItems",
    action: "read",
    possession: "own",
  })
  async questRequestItems(
    @graphql.Args() args: QuestRequestItemsFindUniqueArgs
  ): Promise<QuestRequestItems | null> {
    const result = await this.service.questRequestItems(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => QuestRequestItems)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItems",
    action: "delete",
    possession: "any",
  })
  async deleteQuestRequestItems(
    @graphql.Args() args: DeleteQuestRequestItemsArgs
  ): Promise<QuestRequestItems | null> {
    try {
      return await this.service.deleteQuestRequestItems(args);
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