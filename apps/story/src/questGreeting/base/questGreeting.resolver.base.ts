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
import { QuestGreeting } from "./QuestGreeting";
import { QuestGreetingCountArgs } from "./QuestGreetingCountArgs";
import { QuestGreetingFindManyArgs } from "./QuestGreetingFindManyArgs";
import { QuestGreetingFindUniqueArgs } from "./QuestGreetingFindUniqueArgs";
import { CreateQuestGreetingArgs } from "./CreateQuestGreetingArgs";
import { UpdateQuestGreetingArgs } from "./UpdateQuestGreetingArgs";
import { DeleteQuestGreetingArgs } from "./DeleteQuestGreetingArgs";
import { QuestGreetingLocaleFindManyArgs } from "../../questGreetingLocale/base/QuestGreetingLocaleFindManyArgs";
import { QuestGreetingLocale } from "../../questGreetingLocale/base/QuestGreetingLocale";
import { QuestFindManyArgs } from "../../quest/base/QuestFindManyArgs";
import { Quest } from "../../quest/base/Quest";
import { QuestGreetingService } from "../questGreeting.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestGreeting)
export class QuestGreetingResolverBase {
  constructor(
    protected readonly service: QuestGreetingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuestGreeting",
    action: "read",
    possession: "any",
  })
  async _questGreetingsMeta(
    @graphql.Args() args: QuestGreetingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QuestGreeting])
  @nestAccessControl.UseRoles({
    resource: "QuestGreeting",
    action: "read",
    possession: "any",
  })
  async questGreetings(
    @graphql.Args() args: QuestGreetingFindManyArgs
  ): Promise<QuestGreeting[]> {
    return this.service.questGreetings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QuestGreeting, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuestGreeting",
    action: "read",
    possession: "own",
  })
  async questGreeting(
    @graphql.Args() args: QuestGreetingFindUniqueArgs
  ): Promise<QuestGreeting | null> {
    const result = await this.service.questGreeting(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QuestGreeting)
  @nestAccessControl.UseRoles({
    resource: "QuestGreeting",
    action: "create",
    possession: "any",
  })
  async createQuestGreeting(
    @graphql.Args() args: CreateQuestGreetingArgs
  ): Promise<QuestGreeting> {
    return await this.service.createQuestGreeting({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QuestGreeting)
  @nestAccessControl.UseRoles({
    resource: "QuestGreeting",
    action: "update",
    possession: "any",
  })
  async updateQuestGreeting(
    @graphql.Args() args: UpdateQuestGreetingArgs
  ): Promise<QuestGreeting | null> {
    try {
      return await this.service.updateQuestGreeting({
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

  @graphql.Mutation(() => QuestGreeting)
  @nestAccessControl.UseRoles({
    resource: "QuestGreeting",
    action: "delete",
    possession: "any",
  })
  async deleteQuestGreeting(
    @graphql.Args() args: DeleteQuestGreetingArgs
  ): Promise<QuestGreeting | null> {
    try {
      return await this.service.deleteQuestGreeting(args);
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
  @graphql.ResolveField(() => [QuestGreetingLocale], {
    name: "questGreetingLocales",
  })
  @nestAccessControl.UseRoles({
    resource: "QuestGreetingLocale",
    action: "read",
    possession: "any",
  })
  async findQuestGreetingLocales(
    @graphql.Parent() parent: QuestGreeting,
    @graphql.Args() args: QuestGreetingLocaleFindManyArgs
  ): Promise<QuestGreetingLocale[]> {
    const results = await this.service.findQuestGreetingLocales(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Quest], { name: "quests" })
  @nestAccessControl.UseRoles({
    resource: "Quest",
    action: "read",
    possession: "any",
  })
  async findQuests(
    @graphql.Parent() parent: QuestGreeting,
    @graphql.Args() args: QuestFindManyArgs
  ): Promise<Quest[]> {
    const results = await this.service.findQuests(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
