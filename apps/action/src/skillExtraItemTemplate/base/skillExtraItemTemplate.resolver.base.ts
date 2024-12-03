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
import { SkillExtraItemTemplate } from "./SkillExtraItemTemplate";
import { SkillExtraItemTemplateCountArgs } from "./SkillExtraItemTemplateCountArgs";
import { SkillExtraItemTemplateFindManyArgs } from "./SkillExtraItemTemplateFindManyArgs";
import { SkillExtraItemTemplateFindUniqueArgs } from "./SkillExtraItemTemplateFindUniqueArgs";
import { DeleteSkillExtraItemTemplateArgs } from "./DeleteSkillExtraItemTemplateArgs";
import { SkillExtraItemTemplateService } from "../skillExtraItemTemplate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SkillExtraItemTemplate)
export class SkillExtraItemTemplateResolverBase {
  constructor(
    protected readonly service: SkillExtraItemTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SkillExtraItemTemplate",
    action: "read",
    possession: "any",
  })
  async _skillExtraItemTemplatesMeta(
    @graphql.Args() args: SkillExtraItemTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SkillExtraItemTemplate])
  @nestAccessControl.UseRoles({
    resource: "SkillExtraItemTemplate",
    action: "read",
    possession: "any",
  })
  async skillExtraItemTemplates(
    @graphql.Args() args: SkillExtraItemTemplateFindManyArgs
  ): Promise<SkillExtraItemTemplate[]> {
    return this.service.skillExtraItemTemplates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SkillExtraItemTemplate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SkillExtraItemTemplate",
    action: "read",
    possession: "own",
  })
  async skillExtraItemTemplate(
    @graphql.Args() args: SkillExtraItemTemplateFindUniqueArgs
  ): Promise<SkillExtraItemTemplate | null> {
    const result = await this.service.skillExtraItemTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SkillExtraItemTemplate)
  @nestAccessControl.UseRoles({
    resource: "SkillExtraItemTemplate",
    action: "delete",
    possession: "any",
  })
  async deleteSkillExtraItemTemplate(
    @graphql.Args() args: DeleteSkillExtraItemTemplateArgs
  ): Promise<SkillExtraItemTemplate | null> {
    try {
      return await this.service.deleteSkillExtraItemTemplate(args);
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
