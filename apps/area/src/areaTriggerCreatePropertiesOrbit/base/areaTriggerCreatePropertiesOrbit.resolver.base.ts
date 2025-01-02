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
import { AreaTriggerCreatePropertiesOrbit } from "./AreaTriggerCreatePropertiesOrbit";
import { AreaTriggerCreatePropertiesOrbitCountArgs } from "./AreaTriggerCreatePropertiesOrbitCountArgs";
import { AreaTriggerCreatePropertiesOrbitFindManyArgs } from "./AreaTriggerCreatePropertiesOrbitFindManyArgs";
import { AreaTriggerCreatePropertiesOrbitFindUniqueArgs } from "./AreaTriggerCreatePropertiesOrbitFindUniqueArgs";
import { CreateAreaTriggerCreatePropertiesOrbitArgs } from "./CreateAreaTriggerCreatePropertiesOrbitArgs";
import { UpdateAreaTriggerCreatePropertiesOrbitArgs } from "./UpdateAreaTriggerCreatePropertiesOrbitArgs";
import { DeleteAreaTriggerCreatePropertiesOrbitArgs } from "./DeleteAreaTriggerCreatePropertiesOrbitArgs";
import { AreaTriggerCreatePropertiesOrbitService } from "../areaTriggerCreatePropertiesOrbit.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTriggerCreatePropertiesOrbit)
export class AreaTriggerCreatePropertiesOrbitResolverBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertiesOrbitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerCreatePropertiesOrbit",
    action: "read",
    possession: "any",
  })
  async _areaTriggerCreatePropertiesOrbitsMeta(
    @graphql.Args() args: AreaTriggerCreatePropertiesOrbitCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AreaTriggerCreatePropertiesOrbit])
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerCreatePropertiesOrbit",
    action: "read",
    possession: "any",
  })
  async areaTriggerCreatePropertiesOrbits(
    @graphql.Args() args: AreaTriggerCreatePropertiesOrbitFindManyArgs
  ): Promise<AreaTriggerCreatePropertiesOrbit[]> {
    return this.service.areaTriggerCreatePropertiesOrbits(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AreaTriggerCreatePropertiesOrbit, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerCreatePropertiesOrbit",
    action: "read",
    possession: "own",
  })
  async areaTriggerCreatePropertiesOrbit(
    @graphql.Args() args: AreaTriggerCreatePropertiesOrbitFindUniqueArgs
  ): Promise<AreaTriggerCreatePropertiesOrbit | null> {
    const result = await this.service.areaTriggerCreatePropertiesOrbit(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AreaTriggerCreatePropertiesOrbit)
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerCreatePropertiesOrbit",
    action: "create",
    possession: "any",
  })
  async createAreaTriggerCreatePropertiesOrbit(
    @graphql.Args() args: CreateAreaTriggerCreatePropertiesOrbitArgs
  ): Promise<AreaTriggerCreatePropertiesOrbit> {
    return await this.service.createAreaTriggerCreatePropertiesOrbit({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AreaTriggerCreatePropertiesOrbit)
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerCreatePropertiesOrbit",
    action: "update",
    possession: "any",
  })
  async updateAreaTriggerCreatePropertiesOrbit(
    @graphql.Args() args: UpdateAreaTriggerCreatePropertiesOrbitArgs
  ): Promise<AreaTriggerCreatePropertiesOrbit | null> {
    try {
      return await this.service.updateAreaTriggerCreatePropertiesOrbit({
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

  @graphql.Mutation(() => AreaTriggerCreatePropertiesOrbit)
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerCreatePropertiesOrbit",
    action: "delete",
    possession: "any",
  })
  async deleteAreaTriggerCreatePropertiesOrbit(
    @graphql.Args() args: DeleteAreaTriggerCreatePropertiesOrbitArgs
  ): Promise<AreaTriggerCreatePropertiesOrbit | null> {
    try {
      return await this.service.deleteAreaTriggerCreatePropertiesOrbit(args);
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