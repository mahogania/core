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
import { QuestTemplateAddon } from "./QuestTemplateAddon";
import { QuestTemplateAddonCountArgs } from "./QuestTemplateAddonCountArgs";
import { QuestTemplateAddonFindManyArgs } from "./QuestTemplateAddonFindManyArgs";
import { QuestTemplateAddonFindUniqueArgs } from "./QuestTemplateAddonFindUniqueArgs";
import { DeleteQuestTemplateAddonArgs } from "./DeleteQuestTemplateAddonArgs";
import { QuestTemplateAddonService } from "../questTemplateAddon.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestTemplateAddon)
export class QuestTemplateAddonResolverBase {
  constructor(
    protected readonly service: QuestTemplateAddonService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuestTemplateAddon",
    action: "read",
    possession: "any",
  })
  async _questTemplateAddonsMeta(
    @graphql.Args() args: QuestTemplateAddonCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QuestTemplateAddon])
  @nestAccessControl.UseRoles({
    resource: "QuestTemplateAddon",
    action: "read",
    possession: "any",
  })
  async questTemplateAddons(
    @graphql.Args() args: QuestTemplateAddonFindManyArgs
  ): Promise<QuestTemplateAddon[]> {
    return this.service.questTemplateAddons(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QuestTemplateAddon, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuestTemplateAddon",
    action: "read",
    possession: "own",
  })
  async questTemplateAddon(
    @graphql.Args() args: QuestTemplateAddonFindUniqueArgs
  ): Promise<QuestTemplateAddon | null> {
    const result = await this.service.questTemplateAddon(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => QuestTemplateAddon)
  @nestAccessControl.UseRoles({
    resource: "QuestTemplateAddon",
    action: "delete",
    possession: "any",
  })
  async deleteQuestTemplateAddon(
    @graphql.Args() args: DeleteQuestTemplateAddonArgs
  ): Promise<QuestTemplateAddon | null> {
    try {
      return await this.service.deleteQuestTemplateAddon(args);
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
