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
import { AreaTeleportTrigger } from "./AreaTeleportTrigger";
import { AreaTeleportTriggerCountArgs } from "./AreaTeleportTriggerCountArgs";
import { AreaTeleportTriggerFindManyArgs } from "./AreaTeleportTriggerFindManyArgs";
import { AreaTeleportTriggerFindUniqueArgs } from "./AreaTeleportTriggerFindUniqueArgs";
import { CreateAreaTeleportTriggerArgs } from "./CreateAreaTeleportTriggerArgs";
import { UpdateAreaTeleportTriggerArgs } from "./UpdateAreaTeleportTriggerArgs";
import { DeleteAreaTeleportTriggerArgs } from "./DeleteAreaTeleportTriggerArgs";
import { Area } from "../../area/base/Area";
import { Portal } from "../../portal/base/Portal";
import { AreaTeleportTriggerService } from "../areaTeleportTrigger.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTeleportTrigger)
export class AreaTeleportTriggerResolverBase {
  constructor(
    protected readonly service: AreaTeleportTriggerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AreaTeleportTrigger",
    action: "read",
    possession: "any",
  })
  async _areaTeleportTriggersMeta(
    @graphql.Args() args: AreaTeleportTriggerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AreaTeleportTrigger])
  @nestAccessControl.UseRoles({
    resource: "AreaTeleportTrigger",
    action: "read",
    possession: "any",
  })
  async areaTeleportTriggers(
    @graphql.Args() args: AreaTeleportTriggerFindManyArgs
  ): Promise<AreaTeleportTrigger[]> {
    return this.service.areaTeleportTriggers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AreaTeleportTrigger, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AreaTeleportTrigger",
    action: "read",
    possession: "own",
  })
  async areaTeleportTrigger(
    @graphql.Args() args: AreaTeleportTriggerFindUniqueArgs
  ): Promise<AreaTeleportTrigger | null> {
    const result = await this.service.areaTeleportTrigger(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AreaTeleportTrigger)
  @nestAccessControl.UseRoles({
    resource: "AreaTeleportTrigger",
    action: "create",
    possession: "any",
  })
  async createAreaTeleportTrigger(
    @graphql.Args() args: CreateAreaTeleportTriggerArgs
  ): Promise<AreaTeleportTrigger> {
    return await this.service.createAreaTeleportTrigger({
      ...args,
      data: {
        ...args.data,

        area: {
          connect: args.data.area,
        },

        portal: {
          connect: args.data.portal,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AreaTeleportTrigger)
  @nestAccessControl.UseRoles({
    resource: "AreaTeleportTrigger",
    action: "update",
    possession: "any",
  })
  async updateAreaTeleportTrigger(
    @graphql.Args() args: UpdateAreaTeleportTriggerArgs
  ): Promise<AreaTeleportTrigger | null> {
    try {
      return await this.service.updateAreaTeleportTrigger({
        ...args,
        data: {
          ...args.data,

          area: {
            connect: args.data.area,
          },

          portal: {
            connect: args.data.portal,
          },
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

  @graphql.Mutation(() => AreaTeleportTrigger)
  @nestAccessControl.UseRoles({
    resource: "AreaTeleportTrigger",
    action: "delete",
    possession: "any",
  })
  async deleteAreaTeleportTrigger(
    @graphql.Args() args: DeleteAreaTeleportTriggerArgs
  ): Promise<AreaTeleportTrigger | null> {
    try {
      return await this.service.deleteAreaTeleportTrigger(args);
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
    @graphql.Parent() parent: AreaTeleportTrigger
  ): Promise<Area | null> {
    const result = await this.service.getArea(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Portal, {
    nullable: true,
    name: "portal",
  })
  @nestAccessControl.UseRoles({
    resource: "Portal",
    action: "read",
    possession: "any",
  })
  async getPortal(
    @graphql.Parent() parent: AreaTeleportTrigger
  ): Promise<Portal | null> {
    const result = await this.service.getPortal(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
