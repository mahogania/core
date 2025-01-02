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
import { Zone } from "./Zone";
import { ZoneCountArgs } from "./ZoneCountArgs";
import { ZoneFindManyArgs } from "./ZoneFindManyArgs";
import { ZoneFindUniqueArgs } from "./ZoneFindUniqueArgs";
import { CreateZoneArgs } from "./CreateZoneArgs";
import { UpdateZoneArgs } from "./UpdateZoneArgs";
import { DeleteZoneArgs } from "./DeleteZoneArgs";
import { AreaFindManyArgs } from "../../area/base/AreaFindManyArgs";
import { Area } from "../../area/base/Area";
import { Map } from "../../map/base/Map";
import { ZoneService } from "../zone.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Zone)
export class ZoneResolverBase {
  constructor(
    protected readonly service: ZoneService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Zone",
    action: "read",
    possession: "any",
  })
  async _zonesMeta(
    @graphql.Args() args: ZoneCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Zone])
  @nestAccessControl.UseRoles({
    resource: "Zone",
    action: "read",
    possession: "any",
  })
  async zones(@graphql.Args() args: ZoneFindManyArgs): Promise<Zone[]> {
    return this.service.zones(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Zone, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Zone",
    action: "read",
    possession: "own",
  })
  async zone(@graphql.Args() args: ZoneFindUniqueArgs): Promise<Zone | null> {
    const result = await this.service.zone(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Zone)
  @nestAccessControl.UseRoles({
    resource: "Zone",
    action: "create",
    possession: "any",
  })
  async createZone(@graphql.Args() args: CreateZoneArgs): Promise<Zone> {
    return await this.service.createZone({
      ...args,
      data: {
        ...args.data,

        map: args.data.map
          ? {
              connect: args.data.map,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Zone)
  @nestAccessControl.UseRoles({
    resource: "Zone",
    action: "update",
    possession: "any",
  })
  async updateZone(@graphql.Args() args: UpdateZoneArgs): Promise<Zone | null> {
    try {
      return await this.service.updateZone({
        ...args,
        data: {
          ...args.data,

          map: args.data.map
            ? {
                connect: args.data.map,
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

  @graphql.Mutation(() => Zone)
  @nestAccessControl.UseRoles({
    resource: "Zone",
    action: "delete",
    possession: "any",
  })
  async deleteZone(@graphql.Args() args: DeleteZoneArgs): Promise<Zone | null> {
    try {
      return await this.service.deleteZone(args);
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
  @graphql.ResolveField(() => [Area], { name: "areas" })
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "read",
    possession: "any",
  })
  async findAreas(
    @graphql.Parent() parent: Zone,
    @graphql.Args() args: AreaFindManyArgs
  ): Promise<Area[]> {
    const results = await this.service.findAreas(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Map, {
    nullable: true,
    name: "map",
  })
  @nestAccessControl.UseRoles({
    resource: "Map",
    action: "read",
    possession: "any",
  })
  async getMap(@graphql.Parent() parent: Zone): Promise<Map | null> {
    const result = await this.service.getMap(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}