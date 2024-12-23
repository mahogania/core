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
import { QuestObjectiveCompletionEffect } from "./QuestObjectiveCompletionEffect";
import { QuestObjectiveCompletionEffectCountArgs } from "./QuestObjectiveCompletionEffectCountArgs";
import { QuestObjectiveCompletionEffectFindManyArgs } from "./QuestObjectiveCompletionEffectFindManyArgs";
import { QuestObjectiveCompletionEffectFindUniqueArgs } from "./QuestObjectiveCompletionEffectFindUniqueArgs";
import { CreateQuestObjectiveCompletionEffectArgs } from "./CreateQuestObjectiveCompletionEffectArgs";
import { UpdateQuestObjectiveCompletionEffectArgs } from "./UpdateQuestObjectiveCompletionEffectArgs";
import { DeleteQuestObjectiveCompletionEffectArgs } from "./DeleteQuestObjectiveCompletionEffectArgs";
import { QuestObjectiveFindManyArgs } from "../../questObjective/base/QuestObjectiveFindManyArgs";
import { QuestObjective } from "../../questObjective/base/QuestObjective";
import { QuestObjectiveCompletionEffectService } from "../questObjectiveCompletionEffect.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestObjectiveCompletionEffect)
export class QuestObjectiveCompletionEffectResolverBase {
  constructor(
    protected readonly service: QuestObjectiveCompletionEffectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveCompletionEffect",
    action: "read",
    possession: "any",
  })
  async _questObjectiveCompletionEffectsMeta(
    @graphql.Args() args: QuestObjectiveCompletionEffectCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QuestObjectiveCompletionEffect])
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveCompletionEffect",
    action: "read",
    possession: "any",
  })
  async questObjectiveCompletionEffects(
    @graphql.Args() args: QuestObjectiveCompletionEffectFindManyArgs
  ): Promise<QuestObjectiveCompletionEffect[]> {
    return this.service.questObjectiveCompletionEffects(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QuestObjectiveCompletionEffect, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveCompletionEffect",
    action: "read",
    possession: "own",
  })
  async questObjectiveCompletionEffect(
    @graphql.Args() args: QuestObjectiveCompletionEffectFindUniqueArgs
  ): Promise<QuestObjectiveCompletionEffect | null> {
    const result = await this.service.questObjectiveCompletionEffect(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QuestObjectiveCompletionEffect)
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveCompletionEffect",
    action: "create",
    possession: "any",
  })
  async createQuestObjectiveCompletionEffect(
    @graphql.Args() args: CreateQuestObjectiveCompletionEffectArgs
  ): Promise<QuestObjectiveCompletionEffect> {
    return await this.service.createQuestObjectiveCompletionEffect({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QuestObjectiveCompletionEffect)
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveCompletionEffect",
    action: "update",
    possession: "any",
  })
  async updateQuestObjectiveCompletionEffect(
    @graphql.Args() args: UpdateQuestObjectiveCompletionEffectArgs
  ): Promise<QuestObjectiveCompletionEffect | null> {
    try {
      return await this.service.updateQuestObjectiveCompletionEffect({
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

  @graphql.Mutation(() => QuestObjectiveCompletionEffect)
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveCompletionEffect",
    action: "delete",
    possession: "any",
  })
  async deleteQuestObjectiveCompletionEffect(
    @graphql.Args() args: DeleteQuestObjectiveCompletionEffectArgs
  ): Promise<QuestObjectiveCompletionEffect | null> {
    try {
      return await this.service.deleteQuestObjectiveCompletionEffect(args);
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
  @graphql.ResolveField(() => [QuestObjective], { name: "questObjectives" })
  @nestAccessControl.UseRoles({
    resource: "QuestObjective",
    action: "read",
    possession: "any",
  })
  async findQuestObjectives(
    @graphql.Parent() parent: QuestObjectiveCompletionEffect,
    @graphql.Args() args: QuestObjectiveFindManyArgs
  ): Promise<QuestObjective[]> {
    const results = await this.service.findQuestObjectives(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
