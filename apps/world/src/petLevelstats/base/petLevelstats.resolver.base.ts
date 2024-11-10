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
import { PetLevelstats } from "./PetLevelstats";
import { PetLevelstatsCountArgs } from "./PetLevelstatsCountArgs";
import { PetLevelstatsFindManyArgs } from "./PetLevelstatsFindManyArgs";
import { PetLevelstatsFindUniqueArgs } from "./PetLevelstatsFindUniqueArgs";
import { DeletePetLevelstatsArgs } from "./DeletePetLevelstatsArgs";
import { PetLevelstatsService } from "../petLevelstats.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PetLevelstats)
export class PetLevelstatsResolverBase {
  constructor(
    protected readonly service: PetLevelstatsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PetLevelstats",
    action: "read",
    possession: "any",
  })
  async _petLevelstatsItemsMeta(
    @graphql.Args() args: PetLevelstatsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PetLevelstats])
  @nestAccessControl.UseRoles({
    resource: "PetLevelstats",
    action: "read",
    possession: "any",
  })
  async petLevelstatsItems(
    @graphql.Args() args: PetLevelstatsFindManyArgs
  ): Promise<PetLevelstats[]> {
    return this.service.petLevelstatsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PetLevelstats, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PetLevelstats",
    action: "read",
    possession: "own",
  })
  async petLevelstats(
    @graphql.Args() args: PetLevelstatsFindUniqueArgs
  ): Promise<PetLevelstats | null> {
    const result = await this.service.petLevelstats(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PetLevelstats)
  @nestAccessControl.UseRoles({
    resource: "PetLevelstats",
    action: "delete",
    possession: "any",
  })
  async deletePetLevelstats(
    @graphql.Args() args: DeletePetLevelstatsArgs
  ): Promise<PetLevelstats | null> {
    try {
      return await this.service.deletePetLevelstats(args);
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