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
import { Quest } from "./Quest";
import { QuestCountArgs } from "./QuestCountArgs";
import { QuestFindManyArgs } from "./QuestFindManyArgs";
import { QuestFindUniqueArgs } from "./QuestFindUniqueArgs";
import { CreateQuestArgs } from "./CreateQuestArgs";
import { UpdateQuestArgs } from "./UpdateQuestArgs";
import { DeleteQuestArgs } from "./DeleteQuestArgs";
import { AreaQuestTriggerFindManyArgs } from "../../areaQuestTrigger/base/AreaQuestTriggerFindManyArgs";
import { AreaQuestTrigger } from "../../areaQuestTrigger/base/AreaQuestTrigger";
import { QuestCompletionConditionalFindManyArgs } from "../../questCompletionConditional/base/QuestCompletionConditionalFindManyArgs";
import { QuestCompletionConditional } from "../../questCompletionConditional/base/QuestCompletionConditional";
import { QuestDescriptionConditionalFindManyArgs } from "../../questDescriptionConditional/base/QuestDescriptionConditionalFindManyArgs";
import { QuestDescriptionConditional } from "../../questDescriptionConditional/base/QuestDescriptionConditional";
import { Epic } from "../../epic/base/Epic";
import { QuestCueEffect } from "../../questCueEffect/base/QuestCueEffect";
import { QuestDetail } from "../../questDetail/base/QuestDetail";
import { QuestGreeting } from "../../questGreeting/base/QuestGreeting";
import { QuestTemplate } from "../../questTemplate/base/QuestTemplate";
import { User } from "../../user/base/User";
import { QuestService } from "../quest.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Quest)
export class QuestResolverBase {
  constructor(
    protected readonly service: QuestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Quest",
    action: "read",
    possession: "any",
  })
  async _questsMeta(
    @graphql.Args() args: QuestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Quest])
  @nestAccessControl.UseRoles({
    resource: "Quest",
    action: "read",
    possession: "any",
  })
  async quests(@graphql.Args() args: QuestFindManyArgs): Promise<Quest[]> {
    return this.service.quests(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Quest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Quest",
    action: "read",
    possession: "own",
  })
  async quest(
    @graphql.Args() args: QuestFindUniqueArgs
  ): Promise<Quest | null> {
    const result = await this.service.quest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Quest)
  @nestAccessControl.UseRoles({
    resource: "Quest",
    action: "create",
    possession: "any",
  })
  async createQuest(@graphql.Args() args: CreateQuestArgs): Promise<Quest> {
    return await this.service.createQuest({
      ...args,
      data: {
        ...args.data,

        epic: args.data.epic
          ? {
              connect: args.data.epic,
            }
          : undefined,

        questCueEffects: args.data.questCueEffects
          ? {
              connect: args.data.questCueEffects,
            }
          : undefined,

        questDetails: args.data.questDetails
          ? {
              connect: args.data.questDetails,
            }
          : undefined,

        questGreeting: args.data.questGreeting
          ? {
              connect: args.data.questGreeting,
            }
          : undefined,

        questTemplate: args.data.questTemplate
          ? {
              connect: args.data.questTemplate,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Quest)
  @nestAccessControl.UseRoles({
    resource: "Quest",
    action: "update",
    possession: "any",
  })
  async updateQuest(
    @graphql.Args() args: UpdateQuestArgs
  ): Promise<Quest | null> {
    try {
      return await this.service.updateQuest({
        ...args,
        data: {
          ...args.data,

          epic: args.data.epic
            ? {
                connect: args.data.epic,
              }
            : undefined,

          questCueEffects: args.data.questCueEffects
            ? {
                connect: args.data.questCueEffects,
              }
            : undefined,

          questDetails: args.data.questDetails
            ? {
                connect: args.data.questDetails,
              }
            : undefined,

          questGreeting: args.data.questGreeting
            ? {
                connect: args.data.questGreeting,
              }
            : undefined,

          questTemplate: args.data.questTemplate
            ? {
                connect: args.data.questTemplate,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
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

  @graphql.Mutation(() => Quest)
  @nestAccessControl.UseRoles({
    resource: "Quest",
    action: "delete",
    possession: "any",
  })
  async deleteQuest(
    @graphql.Args() args: DeleteQuestArgs
  ): Promise<Quest | null> {
    try {
      return await this.service.deleteQuest(args);
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
  @graphql.ResolveField(() => [AreaQuestTrigger], { name: "areaQuestTriggers" })
  @nestAccessControl.UseRoles({
    resource: "AreaQuestTrigger",
    action: "read",
    possession: "any",
  })
  async findAreaQuestTriggers(
    @graphql.Parent() parent: Quest,
    @graphql.Args() args: AreaQuestTriggerFindManyArgs
  ): Promise<AreaQuestTrigger[]> {
    const results = await this.service.findAreaQuestTriggers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [QuestCompletionConditional], {
    name: "questCompletionConditionals",
  })
  @nestAccessControl.UseRoles({
    resource: "QuestCompletionConditional",
    action: "read",
    possession: "any",
  })
  async findQuestCompletionConditionals(
    @graphql.Parent() parent: Quest,
    @graphql.Args() args: QuestCompletionConditionalFindManyArgs
  ): Promise<QuestCompletionConditional[]> {
    const results = await this.service.findQuestCompletionConditionals(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [QuestDescriptionConditional], {
    name: "questDescriptionConditionals",
  })
  @nestAccessControl.UseRoles({
    resource: "QuestDescriptionConditional",
    action: "read",
    possession: "any",
  })
  async findQuestDescriptionConditionals(
    @graphql.Parent() parent: Quest,
    @graphql.Args() args: QuestDescriptionConditionalFindManyArgs
  ): Promise<QuestDescriptionConditional[]> {
    const results = await this.service.findQuestDescriptionConditionals(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Epic, {
    nullable: true,
    name: "epic",
  })
  @nestAccessControl.UseRoles({
    resource: "Epic",
    action: "read",
    possession: "any",
  })
  async getEpic(@graphql.Parent() parent: Quest): Promise<Epic | null> {
    const result = await this.service.getEpic(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => QuestCueEffect, {
    nullable: true,
    name: "questCueEffects",
  })
  @nestAccessControl.UseRoles({
    resource: "QuestCueEffect",
    action: "read",
    possession: "any",
  })
  async getQuestCueEffects(
    @graphql.Parent() parent: Quest
  ): Promise<QuestCueEffect | null> {
    const result = await this.service.getQuestCueEffects(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => QuestDetail, {
    nullable: true,
    name: "questDetails",
  })
  @nestAccessControl.UseRoles({
    resource: "QuestDetail",
    action: "read",
    possession: "any",
  })
  async getQuestDetails(
    @graphql.Parent() parent: Quest
  ): Promise<QuestDetail | null> {
    const result = await this.service.getQuestDetails(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => QuestGreeting, {
    nullable: true,
    name: "questGreeting",
  })
  @nestAccessControl.UseRoles({
    resource: "QuestGreeting",
    action: "read",
    possession: "any",
  })
  async getQuestGreeting(
    @graphql.Parent() parent: Quest
  ): Promise<QuestGreeting | null> {
    const result = await this.service.getQuestGreeting(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => QuestTemplate, {
    nullable: true,
    name: "questTemplate",
  })
  @nestAccessControl.UseRoles({
    resource: "QuestTemplate",
    action: "read",
    possession: "any",
  })
  async getQuestTemplate(
    @graphql.Parent() parent: Quest
  ): Promise<QuestTemplate | null> {
    const result = await this.service.getQuestTemplate(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Quest): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}