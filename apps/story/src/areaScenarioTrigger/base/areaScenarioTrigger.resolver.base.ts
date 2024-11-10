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
import { AreaScenarioTrigger } from "./AreaScenarioTrigger";
import { AreaScenarioTriggerCountArgs } from "./AreaScenarioTriggerCountArgs";
import { AreaScenarioTriggerFindManyArgs } from "./AreaScenarioTriggerFindManyArgs";
import { AreaScenarioTriggerFindUniqueArgs } from "./AreaScenarioTriggerFindUniqueArgs";
import { CreateAreaScenarioTriggerArgs } from "./CreateAreaScenarioTriggerArgs";
import { UpdateAreaScenarioTriggerArgs } from "./UpdateAreaScenarioTriggerArgs";
import { DeleteAreaScenarioTriggerArgs } from "./DeleteAreaScenarioTriggerArgs";
import { Area } from "../../area/base/Area";
import { Scenario } from "../../scenario/base/Scenario";
import { AreaScenarioTriggerService } from "../areaScenarioTrigger.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaScenarioTrigger)
export class AreaScenarioTriggerResolverBase {
  constructor(
    protected readonly service: AreaScenarioTriggerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AreaScenarioTrigger",
    action: "read",
    possession: "any",
  })
  async _areaScenarioTriggersMeta(
    @graphql.Args() args: AreaScenarioTriggerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AreaScenarioTrigger])
  @nestAccessControl.UseRoles({
    resource: "AreaScenarioTrigger",
    action: "read",
    possession: "any",
  })
  async areaScenarioTriggers(
    @graphql.Args() args: AreaScenarioTriggerFindManyArgs
  ): Promise<AreaScenarioTrigger[]> {
    return this.service.areaScenarioTriggers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AreaScenarioTrigger, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AreaScenarioTrigger",
    action: "read",
    possession: "own",
  })
  async areaScenarioTrigger(
    @graphql.Args() args: AreaScenarioTriggerFindUniqueArgs
  ): Promise<AreaScenarioTrigger | null> {
    const result = await this.service.areaScenarioTrigger(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AreaScenarioTrigger)
  @nestAccessControl.UseRoles({
    resource: "AreaScenarioTrigger",
    action: "create",
    possession: "any",
  })
  async createAreaScenarioTrigger(
    @graphql.Args() args: CreateAreaScenarioTriggerArgs
  ): Promise<AreaScenarioTrigger> {
    return await this.service.createAreaScenarioTrigger({
      ...args,
      data: {
        ...args.data,

        area: args.data.area
          ? {
              connect: args.data.area,
            }
          : undefined,

        scenario: args.data.scenario
          ? {
              connect: args.data.scenario,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AreaScenarioTrigger)
  @nestAccessControl.UseRoles({
    resource: "AreaScenarioTrigger",
    action: "update",
    possession: "any",
  })
  async updateAreaScenarioTrigger(
    @graphql.Args() args: UpdateAreaScenarioTriggerArgs
  ): Promise<AreaScenarioTrigger | null> {
    try {
      return await this.service.updateAreaScenarioTrigger({
        ...args,
        data: {
          ...args.data,

          area: args.data.area
            ? {
                connect: args.data.area,
              }
            : undefined,

          scenario: args.data.scenario
            ? {
                connect: args.data.scenario,
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

  @graphql.Mutation(() => AreaScenarioTrigger)
  @nestAccessControl.UseRoles({
    resource: "AreaScenarioTrigger",
    action: "delete",
    possession: "any",
  })
  async deleteAreaScenarioTrigger(
    @graphql.Args() args: DeleteAreaScenarioTriggerArgs
  ): Promise<AreaScenarioTrigger | null> {
    try {
      return await this.service.deleteAreaScenarioTrigger(args);
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
  @graphql.ResolveField(() => Area, {
    nullable: true,
    name: "area",
  })
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "read",
    possession: "any",
  })
  async getArea(
    @graphql.Parent() parent: AreaScenarioTrigger
  ): Promise<Area | null> {
    const result = await this.service.getArea(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Scenario, {
    nullable: true,
    name: "scenario",
  })
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "read",
    possession: "any",
  })
  async getScenario(
    @graphql.Parent() parent: AreaScenarioTrigger
  ): Promise<Scenario | null> {
    const result = await this.service.getScenario(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
