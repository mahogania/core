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
import { Scenarios } from "./Scenarios";
import { ScenariosCountArgs } from "./ScenariosCountArgs";
import { ScenariosFindManyArgs } from "./ScenariosFindManyArgs";
import { ScenariosFindUniqueArgs } from "./ScenariosFindUniqueArgs";
import { DeleteScenariosArgs } from "./DeleteScenariosArgs";
import { ScenariosService } from "../scenarios.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Scenarios)
export class ScenariosResolverBase {
  constructor(
    protected readonly service: ScenariosService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Scenarios",
    action: "read",
    possession: "any",
  })
  async _scenariosItemsMeta(
    @graphql.Args() args: ScenariosCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Scenarios])
  @nestAccessControl.UseRoles({
    resource: "Scenarios",
    action: "read",
    possession: "any",
  })
  async scenariosItems(
    @graphql.Args() args: ScenariosFindManyArgs
  ): Promise<Scenarios[]> {
    return this.service.scenariosItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Scenarios, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Scenarios",
    action: "read",
    possession: "own",
  })
  async scenarios(
    @graphql.Args() args: ScenariosFindUniqueArgs
  ): Promise<Scenarios | null> {
    const result = await this.service.scenarios(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Scenarios)
  @nestAccessControl.UseRoles({
    resource: "Scenarios",
    action: "delete",
    possession: "any",
  })
  async deleteScenarios(
    @graphql.Args() args: DeleteScenariosArgs
  ): Promise<Scenarios | null> {
    try {
      return await this.service.deleteScenarios(args);
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