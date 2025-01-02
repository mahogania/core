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
import { Map } from "./Map";
import { MapCountArgs } from "./MapCountArgs";
import { MapFindManyArgs } from "./MapFindManyArgs";
import { MapFindUniqueArgs } from "./MapFindUniqueArgs";
import { CreateMapArgs } from "./CreateMapArgs";
import { UpdateMapArgs } from "./UpdateMapArgs";
import { DeleteMapArgs } from "./DeleteMapArgs";
import { ZoneFindManyArgs } from "../../zone/base/ZoneFindManyArgs";
import { Zone } from "../../zone/base/Zone";
import { MapService } from "../map.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Map)
export class MapResolverBase {
  constructor(
    protected readonly service: MapService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Map",
    action: "read",
    possession: "any",
  })
  async _mapsMeta(
    @graphql.Args() args: MapCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Map])
  @nestAccessControl.UseRoles({
    resource: "Map",
    action: "read",
    possession: "any",
  })
  async maps(@graphql.Args() args: MapFindManyArgs): Promise<Map[]> {
    return this.service.maps(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Map, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Map",
    action: "read",
    possession: "own",
  })
  async map(@graphql.Args() args: MapFindUniqueArgs): Promise<Map | null> {
    const result = await this.service.map(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Map)
  @nestAccessControl.UseRoles({
    resource: "Map",
    action: "create",
    possession: "any",
  })
  async createMap(@graphql.Args() args: CreateMapArgs): Promise<Map> {
    return await this.service.createMap({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Map)
  @nestAccessControl.UseRoles({
    resource: "Map",
    action: "update",
    possession: "any",
  })
  async updateMap(@graphql.Args() args: UpdateMapArgs): Promise<Map | null> {
    try {
      return await this.service.updateMap({
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

  @graphql.Mutation(() => Map)
  @nestAccessControl.UseRoles({
    resource: "Map",
    action: "delete",
    possession: "any",
  })
  async deleteMap(@graphql.Args() args: DeleteMapArgs): Promise<Map | null> {
    try {
      return await this.service.deleteMap(args);
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
  @graphql.ResolveField(() => [Zone], { name: "zones" })
  @nestAccessControl.UseRoles({
    resource: "Zone",
    action: "read",
    possession: "any",
  })
  async findZones(
    @graphql.Parent() parent: Map,
    @graphql.Args() args: ZoneFindManyArgs
  ): Promise<Zone[]> {
    const results = await this.service.findZones(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}