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
import { BattlegroundTemplate } from "./BattlegroundTemplate";
import { BattlegroundTemplateCountArgs } from "./BattlegroundTemplateCountArgs";
import { BattlegroundTemplateFindManyArgs } from "./BattlegroundTemplateFindManyArgs";
import { BattlegroundTemplateFindUniqueArgs } from "./BattlegroundTemplateFindUniqueArgs";
import { DeleteBattlegroundTemplateArgs } from "./DeleteBattlegroundTemplateArgs";
import { BattlegroundTemplateService } from "../battlegroundTemplate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BattlegroundTemplate)
export class BattlegroundTemplateResolverBase {
  constructor(
    protected readonly service: BattlegroundTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BattlegroundTemplate",
    action: "read",
    possession: "any",
  })
  async _battlegroundTemplatesMeta(
    @graphql.Args() args: BattlegroundTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BattlegroundTemplate])
  @nestAccessControl.UseRoles({
    resource: "BattlegroundTemplate",
    action: "read",
    possession: "any",
  })
  async battlegroundTemplates(
    @graphql.Args() args: BattlegroundTemplateFindManyArgs
  ): Promise<BattlegroundTemplate[]> {
    return this.service.battlegroundTemplates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BattlegroundTemplate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BattlegroundTemplate",
    action: "read",
    possession: "own",
  })
  async battlegroundTemplate(
    @graphql.Args() args: BattlegroundTemplateFindUniqueArgs
  ): Promise<BattlegroundTemplate | null> {
    const result = await this.service.battlegroundTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BattlegroundTemplate)
  @nestAccessControl.UseRoles({
    resource: "BattlegroundTemplate",
    action: "delete",
    possession: "any",
  })
  async deleteBattlegroundTemplate(
    @graphql.Args() args: DeleteBattlegroundTemplateArgs
  ): Promise<BattlegroundTemplate | null> {
    try {
      return await this.service.deleteBattlegroundTemplate(args);
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
