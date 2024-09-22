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
import { InstanceTemplate } from "./InstanceTemplate";
import { InstanceTemplateCountArgs } from "./InstanceTemplateCountArgs";
import { InstanceTemplateFindManyArgs } from "./InstanceTemplateFindManyArgs";
import { InstanceTemplateFindUniqueArgs } from "./InstanceTemplateFindUniqueArgs";
import { DeleteInstanceTemplateArgs } from "./DeleteInstanceTemplateArgs";
import { InstanceTemplateService } from "../instanceTemplate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InstanceTemplate)
export class InstanceTemplateResolverBase {
  constructor(
    protected readonly service: InstanceTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "InstanceTemplate",
    action: "read",
    possession: "any",
  })
  async _instanceTemplatesMeta(
    @graphql.Args() args: InstanceTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [InstanceTemplate])
  @nestAccessControl.UseRoles({
    resource: "InstanceTemplate",
    action: "read",
    possession: "any",
  })
  async instanceTemplates(
    @graphql.Args() args: InstanceTemplateFindManyArgs
  ): Promise<InstanceTemplate[]> {
    return this.service.instanceTemplates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => InstanceTemplate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InstanceTemplate",
    action: "read",
    possession: "own",
  })
  async instanceTemplate(
    @graphql.Args() args: InstanceTemplateFindUniqueArgs
  ): Promise<InstanceTemplate | null> {
    const result = await this.service.instanceTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => InstanceTemplate)
  @nestAccessControl.UseRoles({
    resource: "InstanceTemplate",
    action: "delete",
    possession: "any",
  })
  async deleteInstanceTemplate(
    @graphql.Args() args: DeleteInstanceTemplateArgs
  ): Promise<InstanceTemplate | null> {
    try {
      return await this.service.deleteInstanceTemplate(args);
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
