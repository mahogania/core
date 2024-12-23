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
import { BattlePetQuality } from "./BattlePetQuality";
import { BattlePetQualityCountArgs } from "./BattlePetQualityCountArgs";
import { BattlePetQualityFindManyArgs } from "./BattlePetQualityFindManyArgs";
import { BattlePetQualityFindUniqueArgs } from "./BattlePetQualityFindUniqueArgs";
import { DeleteBattlePetQualityArgs } from "./DeleteBattlePetQualityArgs";
import { BattlePetQualityService } from "../battlePetQuality.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BattlePetQuality)
export class BattlePetQualityResolverBase {
  constructor(
    protected readonly service: BattlePetQualityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BattlePetQuality",
    action: "read",
    possession: "any",
  })
  async _battlePetQualitiesMeta(
    @graphql.Args() args: BattlePetQualityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BattlePetQuality])
  @nestAccessControl.UseRoles({
    resource: "BattlePetQuality",
    action: "read",
    possession: "any",
  })
  async battlePetQualities(
    @graphql.Args() args: BattlePetQualityFindManyArgs
  ): Promise<BattlePetQuality[]> {
    return this.service.battlePetQualities(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BattlePetQuality, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BattlePetQuality",
    action: "read",
    possession: "own",
  })
  async battlePetQuality(
    @graphql.Args() args: BattlePetQualityFindUniqueArgs
  ): Promise<BattlePetQuality | null> {
    const result = await this.service.battlePetQuality(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BattlePetQuality)
  @nestAccessControl.UseRoles({
    resource: "BattlePetQuality",
    action: "delete",
    possession: "any",
  })
  async deleteBattlePetQuality(
    @graphql.Args() args: DeleteBattlePetQualityArgs
  ): Promise<BattlePetQuality | null> {
    try {
      return await this.service.deleteBattlePetQuality(args);
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
