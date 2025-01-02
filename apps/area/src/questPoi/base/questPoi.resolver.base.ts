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
import { QuestPoi } from "./QuestPoi";
import { QuestPoiCountArgs } from "./QuestPoiCountArgs";
import { QuestPoiFindManyArgs } from "./QuestPoiFindManyArgs";
import { QuestPoiFindUniqueArgs } from "./QuestPoiFindUniqueArgs";
import { DeleteQuestPoiArgs } from "./DeleteQuestPoiArgs";
import { QuestPoiService } from "../questPoi.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestPoi)
export class QuestPoiResolverBase {
  constructor(
    protected readonly service: QuestPoiService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuestPoi",
    action: "read",
    possession: "any",
  })
  async _questPoisMeta(
    @graphql.Args() args: QuestPoiCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QuestPoi])
  @nestAccessControl.UseRoles({
    resource: "QuestPoi",
    action: "read",
    possession: "any",
  })
  async questPois(
    @graphql.Args() args: QuestPoiFindManyArgs
  ): Promise<QuestPoi[]> {
    return this.service.questPois(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QuestPoi, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuestPoi",
    action: "read",
    possession: "own",
  })
  async questPoi(
    @graphql.Args() args: QuestPoiFindUniqueArgs
  ): Promise<QuestPoi | null> {
    const result = await this.service.questPoi(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => QuestPoi)
  @nestAccessControl.UseRoles({
    resource: "QuestPoi",
    action: "delete",
    possession: "any",
  })
  async deleteQuestPoi(
    @graphql.Args() args: DeleteQuestPoiArgs
  ): Promise<QuestPoi | null> {
    try {
      return await this.service.deleteQuestPoi(args);
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