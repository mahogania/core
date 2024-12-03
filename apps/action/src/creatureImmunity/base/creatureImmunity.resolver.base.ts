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
import { CreatureImmunity } from "./CreatureImmunity";
import { CreatureImmunityCountArgs } from "./CreatureImmunityCountArgs";
import { CreatureImmunityFindManyArgs } from "./CreatureImmunityFindManyArgs";
import { CreatureImmunityFindUniqueArgs } from "./CreatureImmunityFindUniqueArgs";
import { CreateCreatureImmunityArgs } from "./CreateCreatureImmunityArgs";
import { UpdateCreatureImmunityArgs } from "./UpdateCreatureImmunityArgs";
import { DeleteCreatureImmunityArgs } from "./DeleteCreatureImmunityArgs";
import { CreatureFindManyArgs } from "../../creature/base/CreatureFindManyArgs";
import { Creature } from "../../creature/base/Creature";
import { CreatureImmunityService } from "../creatureImmunity.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureImmunity)
export class CreatureImmunityResolverBase {
  constructor(
    protected readonly service: CreatureImmunityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CreatureImmunity",
    action: "read",
    possession: "any",
  })
  async _creatureImmunitiesMeta(
    @graphql.Args() args: CreatureImmunityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CreatureImmunity])
  @nestAccessControl.UseRoles({
    resource: "CreatureImmunity",
    action: "read",
    possession: "any",
  })
  async creatureImmunities(
    @graphql.Args() args: CreatureImmunityFindManyArgs
  ): Promise<CreatureImmunity[]> {
    return this.service.creatureImmunities(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CreatureImmunity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CreatureImmunity",
    action: "read",
    possession: "own",
  })
  async creatureImmunity(
    @graphql.Args() args: CreatureImmunityFindUniqueArgs
  ): Promise<CreatureImmunity | null> {
    const result = await this.service.creatureImmunity(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CreatureImmunity)
  @nestAccessControl.UseRoles({
    resource: "CreatureImmunity",
    action: "create",
    possession: "any",
  })
  async createCreatureImmunity(
    @graphql.Args() args: CreateCreatureImmunityArgs
  ): Promise<CreatureImmunity> {
    return await this.service.createCreatureImmunity({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CreatureImmunity)
  @nestAccessControl.UseRoles({
    resource: "CreatureImmunity",
    action: "update",
    possession: "any",
  })
  async updateCreatureImmunity(
    @graphql.Args() args: UpdateCreatureImmunityArgs
  ): Promise<CreatureImmunity | null> {
    try {
      return await this.service.updateCreatureImmunity({
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

  @graphql.Mutation(() => CreatureImmunity)
  @nestAccessControl.UseRoles({
    resource: "CreatureImmunity",
    action: "delete",
    possession: "any",
  })
  async deleteCreatureImmunity(
    @graphql.Args() args: DeleteCreatureImmunityArgs
  ): Promise<CreatureImmunity | null> {
    try {
      return await this.service.deleteCreatureImmunity(args);
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
  @graphql.ResolveField(() => [Creature], { name: "creatures" })
  @nestAccessControl.UseRoles({
    resource: "Creature",
    action: "read",
    possession: "any",
  })
  async findCreatures(
    @graphql.Parent() parent: CreatureImmunity,
    @graphql.Args() args: CreatureFindManyArgs
  ): Promise<Creature[]> {
    const results = await this.service.findCreatures(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
