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
import { SceneTemplate } from "./SceneTemplate";
import { SceneTemplateCountArgs } from "./SceneTemplateCountArgs";
import { SceneTemplateFindManyArgs } from "./SceneTemplateFindManyArgs";
import { SceneTemplateFindUniqueArgs } from "./SceneTemplateFindUniqueArgs";
import { DeleteSceneTemplateArgs } from "./DeleteSceneTemplateArgs";
import { SceneTemplateService } from "../sceneTemplate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SceneTemplate)
export class SceneTemplateResolverBase {
  constructor(
    protected readonly service: SceneTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SceneTemplate",
    action: "read",
    possession: "any",
  })
  async _sceneTemplatesMeta(
    @graphql.Args() args: SceneTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SceneTemplate])
  @nestAccessControl.UseRoles({
    resource: "SceneTemplate",
    action: "read",
    possession: "any",
  })
  async sceneTemplates(
    @graphql.Args() args: SceneTemplateFindManyArgs
  ): Promise<SceneTemplate[]> {
    return this.service.sceneTemplates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SceneTemplate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SceneTemplate",
    action: "read",
    possession: "own",
  })
  async sceneTemplate(
    @graphql.Args() args: SceneTemplateFindUniqueArgs
  ): Promise<SceneTemplate | null> {
    const result = await this.service.sceneTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SceneTemplate)
  @nestAccessControl.UseRoles({
    resource: "SceneTemplate",
    action: "delete",
    possession: "any",
  })
  async deleteSceneTemplate(
    @graphql.Args() args: DeleteSceneTemplateArgs
  ): Promise<SceneTemplate | null> {
    try {
      return await this.service.deleteSceneTemplate(args);
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
