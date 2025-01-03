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
import { QuestDetails } from "./QuestDetails";
import { QuestDetailsCountArgs } from "./QuestDetailsCountArgs";
import { QuestDetailsFindManyArgs } from "./QuestDetailsFindManyArgs";
import { QuestDetailsFindUniqueArgs } from "./QuestDetailsFindUniqueArgs";
import { DeleteQuestDetailsArgs } from "./DeleteQuestDetailsArgs";
import { QuestDetailsService } from "../questDetails.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestDetails)
export class QuestDetailsResolverBase {
  constructor(
    protected readonly service: QuestDetailsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuestDetails",
    action: "read",
    possession: "any",
  })
  async _questDetailsItemsMeta(
    @graphql.Args() args: QuestDetailsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QuestDetails])
  @nestAccessControl.UseRoles({
    resource: "QuestDetails",
    action: "read",
    possession: "any",
  })
  async questDetailsItems(
    @graphql.Args() args: QuestDetailsFindManyArgs
  ): Promise<QuestDetails[]> {
    return this.service.questDetailsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QuestDetails, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuestDetails",
    action: "read",
    possession: "own",
  })
  async questDetails(
    @graphql.Args() args: QuestDetailsFindUniqueArgs
  ): Promise<QuestDetails | null> {
    const result = await this.service.questDetails(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => QuestDetails)
  @nestAccessControl.UseRoles({
    resource: "QuestDetails",
    action: "delete",
    possession: "any",
  })
  async deleteQuestDetails(
    @graphql.Args() args: DeleteQuestDetailsArgs
  ): Promise<QuestDetails | null> {
    try {
      return await this.service.deleteQuestDetails(args);
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
