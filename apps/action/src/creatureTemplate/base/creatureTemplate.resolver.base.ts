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
import { CreatureTemplate } from "./CreatureTemplate";
import { CreatureTemplateCountArgs } from "./CreatureTemplateCountArgs";
import { CreatureTemplateFindManyArgs } from "./CreatureTemplateFindManyArgs";
import { CreatureTemplateFindUniqueArgs } from "./CreatureTemplateFindUniqueArgs";
import { DeleteCreatureTemplateArgs } from "./DeleteCreatureTemplateArgs";
import { CreatureTemplateService } from "../creatureTemplate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplate)
export class CreatureTemplateResolverBase {
  constructor(
    protected readonly service: CreatureTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplate",
    action: "read",
    possession: "any",
  })
  async _creatureTemplatesMeta(
    @graphql.Args() args: CreatureTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CreatureTemplate])
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplate",
    action: "read",
    possession: "any",
  })
  async creatureTemplates(
    @graphql.Args() args: CreatureTemplateFindManyArgs
  ): Promise<CreatureTemplate[]> {
    return this.service.creatureTemplates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CreatureTemplate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplate",
    action: "read",
    possession: "own",
  })
  async creatureTemplate(
    @graphql.Args() args: CreatureTemplateFindUniqueArgs
  ): Promise<CreatureTemplate | null> {
    const result = await this.service.creatureTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CreatureTemplate)
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplate",
    action: "delete",
    possession: "any",
  })
  async deleteCreatureTemplate(
    @graphql.Args() args: DeleteCreatureTemplateArgs
  ): Promise<CreatureTemplate | null> {
    try {
      return await this.service.deleteCreatureTemplate(args);
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
