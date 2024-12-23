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
import { PointsOfInterestLocale } from "./PointsOfInterestLocale";
import { PointsOfInterestLocaleCountArgs } from "./PointsOfInterestLocaleCountArgs";
import { PointsOfInterestLocaleFindManyArgs } from "./PointsOfInterestLocaleFindManyArgs";
import { PointsOfInterestLocaleFindUniqueArgs } from "./PointsOfInterestLocaleFindUniqueArgs";
import { DeletePointsOfInterestLocaleArgs } from "./DeletePointsOfInterestLocaleArgs";
import { PointsOfInterestLocaleService } from "../pointsOfInterestLocale.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PointsOfInterestLocale)
export class PointsOfInterestLocaleResolverBase {
  constructor(
    protected readonly service: PointsOfInterestLocaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterestLocale",
    action: "read",
    possession: "any",
  })
  async _pointsOfInterestLocalesMeta(
    @graphql.Args() args: PointsOfInterestLocaleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PointsOfInterestLocale])
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterestLocale",
    action: "read",
    possession: "any",
  })
  async pointsOfInterestLocales(
    @graphql.Args() args: PointsOfInterestLocaleFindManyArgs
  ): Promise<PointsOfInterestLocale[]> {
    return this.service.pointsOfInterestLocales(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PointsOfInterestLocale, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterestLocale",
    action: "read",
    possession: "own",
  })
  async pointsOfInterestLocale(
    @graphql.Args() args: PointsOfInterestLocaleFindUniqueArgs
  ): Promise<PointsOfInterestLocale | null> {
    const result = await this.service.pointsOfInterestLocale(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PointsOfInterestLocale)
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterestLocale",
    action: "delete",
    possession: "any",
  })
  async deletePointsOfInterestLocale(
    @graphql.Args() args: DeletePointsOfInterestLocaleArgs
  ): Promise<PointsOfInterestLocale | null> {
    try {
      return await this.service.deletePointsOfInterestLocale(args);
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
