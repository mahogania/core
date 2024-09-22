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
import { CreatureAddon } from "./CreatureAddon";
import { CreatureAddonCountArgs } from "./CreatureAddonCountArgs";
import { CreatureAddonFindManyArgs } from "./CreatureAddonFindManyArgs";
import { CreatureAddonFindUniqueArgs } from "./CreatureAddonFindUniqueArgs";
import { CreateCreatureAddonArgs } from "./CreateCreatureAddonArgs";
import { UpdateCreatureAddonArgs } from "./UpdateCreatureAddonArgs";
import { DeleteCreatureAddonArgs } from "./DeleteCreatureAddonArgs";
import { CreatureAddonService } from "../creatureAddon.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureAddon)
export class CreatureAddonResolverBase {
  constructor(
    protected readonly service: CreatureAddonService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CreatureAddon",
    action: "read",
    possession: "any",
  })
  async _creatureAddonsMeta(
    @graphql.Args() args: CreatureAddonCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CreatureAddon])
  @nestAccessControl.UseRoles({
    resource: "CreatureAddon",
    action: "read",
    possession: "any",
  })
  async creatureAddons(
    @graphql.Args() args: CreatureAddonFindManyArgs
  ): Promise<CreatureAddon[]> {
    return this.service.creatureAddons(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CreatureAddon, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CreatureAddon",
    action: "read",
    possession: "own",
  })
  async creatureAddon(
    @graphql.Args() args: CreatureAddonFindUniqueArgs
  ): Promise<CreatureAddon | null> {
    const result = await this.service.creatureAddon(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CreatureAddon)
  @nestAccessControl.UseRoles({
    resource: "CreatureAddon",
    action: "create",
    possession: "any",
  })
  async createCreatureAddon(
    @graphql.Args() args: CreateCreatureAddonArgs
  ): Promise<CreatureAddon> {
    return await this.service.createCreatureAddon({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CreatureAddon)
  @nestAccessControl.UseRoles({
    resource: "CreatureAddon",
    action: "update",
    possession: "any",
  })
  async updateCreatureAddon(
    @graphql.Args() args: UpdateCreatureAddonArgs
  ): Promise<CreatureAddon | null> {
    try {
      return await this.service.updateCreatureAddon({
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

  @graphql.Mutation(() => CreatureAddon)
  @nestAccessControl.UseRoles({
    resource: "CreatureAddon",
    action: "delete",
    possession: "any",
  })
  async deleteCreatureAddon(
    @graphql.Args() args: DeleteCreatureAddonArgs
  ): Promise<CreatureAddon | null> {
    try {
      return await this.service.deleteCreatureAddon(args);
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
