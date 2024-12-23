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
import { Scenario } from "./Scenario";
import { ScenarioCountArgs } from "./ScenarioCountArgs";
import { ScenarioFindManyArgs } from "./ScenarioFindManyArgs";
import { ScenarioFindUniqueArgs } from "./ScenarioFindUniqueArgs";
import { CreateScenarioArgs } from "./CreateScenarioArgs";
import { UpdateScenarioArgs } from "./UpdateScenarioArgs";
import { DeleteScenarioArgs } from "./DeleteScenarioArgs";
import { AreaScenarioTriggerFindManyArgs } from "../../areaScenarioTrigger/base/AreaScenarioTriggerFindManyArgs";
import { AreaScenarioTrigger } from "../../areaScenarioTrigger/base/AreaScenarioTrigger";
import { ScenarioRegion } from "../../scenarioRegion/base/ScenarioRegion";
import { SceneTemplate } from "../../sceneTemplate/base/SceneTemplate";
import { User } from "../../user/base/User";
import { ScenarioService } from "../scenario.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Scenario)
export class ScenarioResolverBase {
  constructor(
    protected readonly service: ScenarioService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "read",
    possession: "any",
  })
  async _scenariosMeta(
    @graphql.Args() args: ScenarioCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Scenario])
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "read",
    possession: "any",
  })
  async scenarios(
    @graphql.Args() args: ScenarioFindManyArgs
  ): Promise<Scenario[]> {
    return this.service.scenarios(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Scenario, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "read",
    possession: "own",
  })
  async scenario(
    @graphql.Args() args: ScenarioFindUniqueArgs
  ): Promise<Scenario | null> {
    const result = await this.service.scenario(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Scenario)
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "create",
    possession: "any",
  })
  async createScenario(
    @graphql.Args() args: CreateScenarioArgs
  ): Promise<Scenario> {
    return await this.service.createScenario({
      ...args,
      data: {
        ...args.data,

        scenarioRegions: {
          connect: args.data.scenarioRegions,
        },

        sceneTemplate: {
          connect: args.data.sceneTemplate,
        },

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Scenario)
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "update",
    possession: "any",
  })
  async updateScenario(
    @graphql.Args() args: UpdateScenarioArgs
  ): Promise<Scenario | null> {
    try {
      return await this.service.updateScenario({
        ...args,
        data: {
          ...args.data,

          scenarioRegions: {
            connect: args.data.scenarioRegions,
          },

          sceneTemplate: {
            connect: args.data.sceneTemplate,
          },

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Scenario)
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "delete",
    possession: "any",
  })
  async deleteScenario(
    @graphql.Args() args: DeleteScenarioArgs
  ): Promise<Scenario | null> {
    try {
      return await this.service.deleteScenario(args);
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
  @graphql.ResolveField(() => [AreaScenarioTrigger], {
    name: "areaScenarioTriggers",
  })
  @nestAccessControl.UseRoles({
    resource: "AreaScenarioTrigger",
    action: "read",
    possession: "any",
  })
  async findAreaScenarioTriggers(
    @graphql.Parent() parent: Scenario,
    @graphql.Args() args: AreaScenarioTriggerFindManyArgs
  ): Promise<AreaScenarioTrigger[]> {
    const results = await this.service.findAreaScenarioTriggers(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ScenarioRegion, {
    nullable: true,
    name: "scenarioRegions",
  })
  @nestAccessControl.UseRoles({
    resource: "ScenarioRegion",
    action: "read",
    possession: "any",
  })
  async getScenarioRegions(
    @graphql.Parent() parent: Scenario
  ): Promise<ScenarioRegion | null> {
    const result = await this.service.getScenarioRegions(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SceneTemplate, {
    nullable: true,
    name: "sceneTemplate",
  })
  @nestAccessControl.UseRoles({
    resource: "SceneTemplate",
    action: "read",
    possession: "any",
  })
  async getSceneTemplate(
    @graphql.Parent() parent: Scenario
  ): Promise<SceneTemplate | null> {
    const result = await this.service.getSceneTemplate(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Scenario): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
