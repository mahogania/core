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
import { CreatureEquipTemplate } from "./CreatureEquipTemplate";
import { CreatureEquipTemplateCountArgs } from "./CreatureEquipTemplateCountArgs";
import { CreatureEquipTemplateFindManyArgs } from "./CreatureEquipTemplateFindManyArgs";
import { CreatureEquipTemplateFindUniqueArgs } from "./CreatureEquipTemplateFindUniqueArgs";
import { CreateCreatureEquipTemplateArgs } from "./CreateCreatureEquipTemplateArgs";
import { UpdateCreatureEquipTemplateArgs } from "./UpdateCreatureEquipTemplateArgs";
import { DeleteCreatureEquipTemplateArgs } from "./DeleteCreatureEquipTemplateArgs";
import { CreatureEquipTemplateService } from "../creatureEquipTemplate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureEquipTemplate)
export class CreatureEquipTemplateResolverBase {
  constructor(
    protected readonly service: CreatureEquipTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CreatureEquipTemplate",
    action: "read",
    possession: "any",
  })
  async _creatureEquipTemplatesMeta(
    @graphql.Args() args: CreatureEquipTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CreatureEquipTemplate])
  @nestAccessControl.UseRoles({
    resource: "CreatureEquipTemplate",
    action: "read",
    possession: "any",
  })
  async creatureEquipTemplates(
    @graphql.Args() args: CreatureEquipTemplateFindManyArgs
  ): Promise<CreatureEquipTemplate[]> {
    return this.service.creatureEquipTemplates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CreatureEquipTemplate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CreatureEquipTemplate",
    action: "read",
    possession: "own",
  })
  async creatureEquipTemplate(
    @graphql.Args() args: CreatureEquipTemplateFindUniqueArgs
  ): Promise<CreatureEquipTemplate | null> {
    const result = await this.service.creatureEquipTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CreatureEquipTemplate)
  @nestAccessControl.UseRoles({
    resource: "CreatureEquipTemplate",
    action: "create",
    possession: "any",
  })
  async createCreatureEquipTemplate(
    @graphql.Args() args: CreateCreatureEquipTemplateArgs
  ): Promise<CreatureEquipTemplate> {
    return await this.service.createCreatureEquipTemplate({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CreatureEquipTemplate)
  @nestAccessControl.UseRoles({
    resource: "CreatureEquipTemplate",
    action: "update",
    possession: "any",
  })
  async updateCreatureEquipTemplate(
    @graphql.Args() args: UpdateCreatureEquipTemplateArgs
  ): Promise<CreatureEquipTemplate | null> {
    try {
      return await this.service.updateCreatureEquipTemplate({
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

  @graphql.Mutation(() => CreatureEquipTemplate)
  @nestAccessControl.UseRoles({
    resource: "CreatureEquipTemplate",
    action: "delete",
    possession: "any",
  })
  async deleteCreatureEquipTemplate(
    @graphql.Args() args: DeleteCreatureEquipTemplateArgs
  ): Promise<CreatureEquipTemplate | null> {
    try {
      return await this.service.deleteCreatureEquipTemplate(args);
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
