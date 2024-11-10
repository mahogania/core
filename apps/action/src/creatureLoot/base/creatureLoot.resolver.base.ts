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
import { CreatureLoot } from "./CreatureLoot";
import { CreatureLootCountArgs } from "./CreatureLootCountArgs";
import { CreatureLootFindManyArgs } from "./CreatureLootFindManyArgs";
import { CreatureLootFindUniqueArgs } from "./CreatureLootFindUniqueArgs";
import { CreateCreatureLootArgs } from "./CreateCreatureLootArgs";
import { UpdateCreatureLootArgs } from "./UpdateCreatureLootArgs";
import { DeleteCreatureLootArgs } from "./DeleteCreatureLootArgs";
import { CreatureFindManyArgs } from "../../creature/base/CreatureFindManyArgs";
import { Creature } from "../../creature/base/Creature";
import { CreatureLootService } from "../creatureLoot.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureLoot)
export class CreatureLootResolverBase {
  constructor(
    protected readonly service: CreatureLootService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CreatureLoot",
    action: "read",
    possession: "any",
  })
  async _creatureLootsMeta(
    @graphql.Args() args: CreatureLootCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CreatureLoot])
  @nestAccessControl.UseRoles({
    resource: "CreatureLoot",
    action: "read",
    possession: "any",
  })
  async creatureLoots(
    @graphql.Args() args: CreatureLootFindManyArgs
  ): Promise<CreatureLoot[]> {
    return this.service.creatureLoots(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CreatureLoot, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CreatureLoot",
    action: "read",
    possession: "own",
  })
  async creatureLoot(
    @graphql.Args() args: CreatureLootFindUniqueArgs
  ): Promise<CreatureLoot | null> {
    const result = await this.service.creatureLoot(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CreatureLoot)
  @nestAccessControl.UseRoles({
    resource: "CreatureLoot",
    action: "create",
    possession: "any",
  })
  async createCreatureLoot(
    @graphql.Args() args: CreateCreatureLootArgs
  ): Promise<CreatureLoot> {
    return await this.service.createCreatureLoot({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CreatureLoot)
  @nestAccessControl.UseRoles({
    resource: "CreatureLoot",
    action: "update",
    possession: "any",
  })
  async updateCreatureLoot(
    @graphql.Args() args: UpdateCreatureLootArgs
  ): Promise<CreatureLoot | null> {
    try {
      return await this.service.updateCreatureLoot({
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

  @graphql.Mutation(() => CreatureLoot)
  @nestAccessControl.UseRoles({
    resource: "CreatureLoot",
    action: "delete",
    possession: "any",
  })
  async deleteCreatureLoot(
    @graphql.Args() args: DeleteCreatureLootArgs
  ): Promise<CreatureLoot | null> {
    try {
      return await this.service.deleteCreatureLoot(args);
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
    @graphql.Parent() parent: CreatureLoot,
    @graphql.Args() args: CreatureFindManyArgs
  ): Promise<Creature[]> {
    const results = await this.service.findCreatures(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}