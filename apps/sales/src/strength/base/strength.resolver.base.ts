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
import { Strength } from "./Strength";
import { StrengthCountArgs } from "./StrengthCountArgs";
import { StrengthFindManyArgs } from "./StrengthFindManyArgs";
import { StrengthFindUniqueArgs } from "./StrengthFindUniqueArgs";
import { CreateStrengthArgs } from "./CreateStrengthArgs";
import { UpdateStrengthArgs } from "./UpdateStrengthArgs";
import { DeleteStrengthArgs } from "./DeleteStrengthArgs";
import { FeatureFindManyArgs } from "../../feature/base/FeatureFindManyArgs";
import { Feature } from "../../feature/base/Feature";
import { Business } from "../../business/base/Business";
import { StrengthService } from "../strength.service";
@graphql.Resolver(() => Strength)
export class StrengthResolverBase {
  constructor(protected readonly service: StrengthService) {}

  async _strengthsMeta(
    @graphql.Args() args: StrengthCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Strength])
  async strengths(
    @graphql.Args() args: StrengthFindManyArgs
  ): Promise<Strength[]> {
    return this.service.strengths(args);
  }

  @graphql.Query(() => Strength, { nullable: true })
  async strength(
    @graphql.Args() args: StrengthFindUniqueArgs
  ): Promise<Strength | null> {
    const result = await this.service.strength(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Strength)
  async createStrength(
    @graphql.Args() args: CreateStrengthArgs
  ): Promise<Strength> {
    return await this.service.createStrength({
      ...args,
      data: {
        ...args.data,

        competitor: args.data.competitor
          ? {
              connect: args.data.competitor,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Strength)
  async updateStrength(
    @graphql.Args() args: UpdateStrengthArgs
  ): Promise<Strength | null> {
    try {
      return await this.service.updateStrength({
        ...args,
        data: {
          ...args.data,

          competitor: args.data.competitor
            ? {
                connect: args.data.competitor,
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

  @graphql.Mutation(() => Strength)
  async deleteStrength(
    @graphql.Args() args: DeleteStrengthArgs
  ): Promise<Strength | null> {
    try {
      return await this.service.deleteStrength(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Feature], { name: "features" })
  async findFeatures(
    @graphql.Parent() parent: Strength,
    @graphql.Args() args: FeatureFindManyArgs
  ): Promise<Feature[]> {
    const results = await this.service.findFeatures(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Business, {
    nullable: true,
    name: "competitor",
  })
  async getCompetitor(
    @graphql.Parent() parent: Strength
  ): Promise<Business | null> {
    const result = await this.service.getCompetitor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
