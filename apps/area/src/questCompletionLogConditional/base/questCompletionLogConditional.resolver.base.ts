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
import { QuestCompletionLogConditional } from "./QuestCompletionLogConditional";
import { QuestCompletionLogConditionalCountArgs } from "./QuestCompletionLogConditionalCountArgs";
import { QuestCompletionLogConditionalFindManyArgs } from "./QuestCompletionLogConditionalFindManyArgs";
import { QuestCompletionLogConditionalFindUniqueArgs } from "./QuestCompletionLogConditionalFindUniqueArgs";
import { DeleteQuestCompletionLogConditionalArgs } from "./DeleteQuestCompletionLogConditionalArgs";
import { QuestCompletionLogConditionalService } from "../questCompletionLogConditional.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestCompletionLogConditional)
export class QuestCompletionLogConditionalResolverBase {
  constructor(
    protected readonly service: QuestCompletionLogConditionalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuestCompletionLogConditional",
    action: "read",
    possession: "any",
  })
  async _questCompletionLogConditionalsMeta(
    @graphql.Args() args: QuestCompletionLogConditionalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QuestCompletionLogConditional])
  @nestAccessControl.UseRoles({
    resource: "QuestCompletionLogConditional",
    action: "read",
    possession: "any",
  })
  async questCompletionLogConditionals(
    @graphql.Args() args: QuestCompletionLogConditionalFindManyArgs
  ): Promise<QuestCompletionLogConditional[]> {
    return this.service.questCompletionLogConditionals(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QuestCompletionLogConditional, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuestCompletionLogConditional",
    action: "read",
    possession: "own",
  })
  async questCompletionLogConditional(
    @graphql.Args() args: QuestCompletionLogConditionalFindUniqueArgs
  ): Promise<QuestCompletionLogConditional | null> {
    const result = await this.service.questCompletionLogConditional(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => QuestCompletionLogConditional)
  @nestAccessControl.UseRoles({
    resource: "QuestCompletionLogConditional",
    action: "delete",
    possession: "any",
  })
  async deleteQuestCompletionLogConditional(
    @graphql.Args() args: DeleteQuestCompletionLogConditionalArgs
  ): Promise<QuestCompletionLogConditional | null> {
    try {
      return await this.service.deleteQuestCompletionLogConditional(args);
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