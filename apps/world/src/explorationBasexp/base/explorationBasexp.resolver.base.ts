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
import { ExplorationBasexp } from "./ExplorationBasexp";
import { ExplorationBasexpCountArgs } from "./ExplorationBasexpCountArgs";
import { ExplorationBasexpFindManyArgs } from "./ExplorationBasexpFindManyArgs";
import { ExplorationBasexpFindUniqueArgs } from "./ExplorationBasexpFindUniqueArgs";
import { CreateExplorationBasexpArgs } from "./CreateExplorationBasexpArgs";
import { UpdateExplorationBasexpArgs } from "./UpdateExplorationBasexpArgs";
import { DeleteExplorationBasexpArgs } from "./DeleteExplorationBasexpArgs";
import { ExplorationBasexpService } from "../explorationBasexp.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExplorationBasexp)
export class ExplorationBasexpResolverBase {
  constructor(
    protected readonly service: ExplorationBasexpService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ExplorationBasexp",
    action: "read",
    possession: "any",
  })
  async _explorationBasexpsMeta(
    @graphql.Args() args: ExplorationBasexpCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ExplorationBasexp])
  @nestAccessControl.UseRoles({
    resource: "ExplorationBasexp",
    action: "read",
    possession: "any",
  })
  async explorationBasexps(
    @graphql.Args() args: ExplorationBasexpFindManyArgs
  ): Promise<ExplorationBasexp[]> {
    return this.service.explorationBasexps(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ExplorationBasexp, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ExplorationBasexp",
    action: "read",
    possession: "own",
  })
  async explorationBasexp(
    @graphql.Args() args: ExplorationBasexpFindUniqueArgs
  ): Promise<ExplorationBasexp | null> {
    const result = await this.service.explorationBasexp(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ExplorationBasexp)
  @nestAccessControl.UseRoles({
    resource: "ExplorationBasexp",
    action: "create",
    possession: "any",
  })
  async createExplorationBasexp(
    @graphql.Args() args: CreateExplorationBasexpArgs
  ): Promise<ExplorationBasexp> {
    return await this.service.createExplorationBasexp({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ExplorationBasexp)
  @nestAccessControl.UseRoles({
    resource: "ExplorationBasexp",
    action: "update",
    possession: "any",
  })
  async updateExplorationBasexp(
    @graphql.Args() args: UpdateExplorationBasexpArgs
  ): Promise<ExplorationBasexp | null> {
    try {
      return await this.service.updateExplorationBasexp({
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

  @graphql.Mutation(() => ExplorationBasexp)
  @nestAccessControl.UseRoles({
    resource: "ExplorationBasexp",
    action: "delete",
    possession: "any",
  })
  async deleteExplorationBasexp(
    @graphql.Args() args: DeleteExplorationBasexpArgs
  ): Promise<ExplorationBasexp | null> {
    try {
      return await this.service.deleteExplorationBasexp(args);
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
