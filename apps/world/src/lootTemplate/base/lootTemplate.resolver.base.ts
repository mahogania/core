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
import { LootTemplate } from "./LootTemplate";
import { LootTemplateCountArgs } from "./LootTemplateCountArgs";
import { LootTemplateFindManyArgs } from "./LootTemplateFindManyArgs";
import { LootTemplateFindUniqueArgs } from "./LootTemplateFindUniqueArgs";
import { CreateLootTemplateArgs } from "./CreateLootTemplateArgs";
import { UpdateLootTemplateArgs } from "./UpdateLootTemplateArgs";
import { DeleteLootTemplateArgs } from "./DeleteLootTemplateArgs";
import { GameObjectLootTemplateFindManyArgs } from "../../gameObjectLootTemplate/base/GameObjectLootTemplateFindManyArgs";
import { GameObjectLootTemplate } from "../../gameObjectLootTemplate/base/GameObjectLootTemplate";
import { MailLootTemplateFindManyArgs } from "../../mailLootTemplate/base/MailLootTemplateFindManyArgs";
import { MailLootTemplate } from "../../mailLootTemplate/base/MailLootTemplate";
import { MillingLootTemplateFindManyArgs } from "../../millingLootTemplate/base/MillingLootTemplateFindManyArgs";
import { MillingLootTemplate } from "../../millingLootTemplate/base/MillingLootTemplate";
import { LootTemplateService } from "../lootTemplate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LootTemplate)
export class LootTemplateResolverBase {
  constructor(
    protected readonly service: LootTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LootTemplate",
    action: "read",
    possession: "any",
  })
  async _lootTemplatesMeta(
    @graphql.Args() args: LootTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [LootTemplate])
  @nestAccessControl.UseRoles({
    resource: "LootTemplate",
    action: "read",
    possession: "any",
  })
  async lootTemplates(
    @graphql.Args() args: LootTemplateFindManyArgs
  ): Promise<LootTemplate[]> {
    return this.service.lootTemplates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LootTemplate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LootTemplate",
    action: "read",
    possession: "own",
  })
  async lootTemplate(
    @graphql.Args() args: LootTemplateFindUniqueArgs
  ): Promise<LootTemplate | null> {
    const result = await this.service.lootTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LootTemplate)
  @nestAccessControl.UseRoles({
    resource: "LootTemplate",
    action: "create",
    possession: "any",
  })
  async createLootTemplate(
    @graphql.Args() args: CreateLootTemplateArgs
  ): Promise<LootTemplate> {
    return await this.service.createLootTemplate({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LootTemplate)
  @nestAccessControl.UseRoles({
    resource: "LootTemplate",
    action: "update",
    possession: "any",
  })
  async updateLootTemplate(
    @graphql.Args() args: UpdateLootTemplateArgs
  ): Promise<LootTemplate | null> {
    try {
      return await this.service.updateLootTemplate({
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

  @graphql.Mutation(() => LootTemplate)
  @nestAccessControl.UseRoles({
    resource: "LootTemplate",
    action: "delete",
    possession: "any",
  })
  async deleteLootTemplate(
    @graphql.Args() args: DeleteLootTemplateArgs
  ): Promise<LootTemplate | null> {
    try {
      return await this.service.deleteLootTemplate(args);
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
  @graphql.ResolveField(() => [GameObjectLootTemplate], {
    name: "gameObjectLootTemplates",
  })
  @nestAccessControl.UseRoles({
    resource: "GameObjectLootTemplate",
    action: "read",
    possession: "any",
  })
  async findGameObjectLootTemplates(
    @graphql.Parent() parent: LootTemplate,
    @graphql.Args() args: GameObjectLootTemplateFindManyArgs
  ): Promise<GameObjectLootTemplate[]> {
    const results = await this.service.findGameObjectLootTemplates(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MailLootTemplate], { name: "mailLootTemplates" })
  @nestAccessControl.UseRoles({
    resource: "MailLootTemplate",
    action: "read",
    possession: "any",
  })
  async findMailLootTemplates(
    @graphql.Parent() parent: LootTemplate,
    @graphql.Args() args: MailLootTemplateFindManyArgs
  ): Promise<MailLootTemplate[]> {
    const results = await this.service.findMailLootTemplates(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MillingLootTemplate], {
    name: "millingLootTemplates",
  })
  @nestAccessControl.UseRoles({
    resource: "MillingLootTemplate",
    action: "read",
    possession: "any",
  })
  async findMillingLootTemplates(
    @graphql.Parent() parent: LootTemplate,
    @graphql.Args() args: MillingLootTemplateFindManyArgs
  ): Promise<MillingLootTemplate[]> {
    const results = await this.service.findMillingLootTemplates(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }
}
