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
import { UomConversionFactor } from "./UomConversionFactor";
import { UomConversionFactorCountArgs } from "./UomConversionFactorCountArgs";
import { UomConversionFactorFindManyArgs } from "./UomConversionFactorFindManyArgs";
import { UomConversionFactorFindUniqueArgs } from "./UomConversionFactorFindUniqueArgs";
import { CreateUomConversionFactorArgs } from "./CreateUomConversionFactorArgs";
import { UpdateUomConversionFactorArgs } from "./UpdateUomConversionFactorArgs";
import { DeleteUomConversionFactorArgs } from "./DeleteUomConversionFactorArgs";
import { UomConversionFactorService } from "../uomConversionFactor.service";
@graphql.Resolver(() => UomConversionFactor)
export class UomConversionFactorResolverBase {
  constructor(protected readonly service: UomConversionFactorService) {}

  async _uomConversionFactorsMeta(
    @graphql.Args() args: UomConversionFactorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UomConversionFactor])
  async uomConversionFactors(
    @graphql.Args() args: UomConversionFactorFindManyArgs
  ): Promise<UomConversionFactor[]> {
    return this.service.uomConversionFactors(args);
  }

  @graphql.Query(() => UomConversionFactor, { nullable: true })
  async uomConversionFactor(
    @graphql.Args() args: UomConversionFactorFindUniqueArgs
  ): Promise<UomConversionFactor | null> {
    const result = await this.service.uomConversionFactor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UomConversionFactor)
  async createUomConversionFactor(
    @graphql.Args() args: CreateUomConversionFactorArgs
  ): Promise<UomConversionFactor> {
    return await this.service.createUomConversionFactor({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => UomConversionFactor)
  async updateUomConversionFactor(
    @graphql.Args() args: UpdateUomConversionFactorArgs
  ): Promise<UomConversionFactor | null> {
    try {
      return await this.service.updateUomConversionFactor({
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

  @graphql.Mutation(() => UomConversionFactor)
  async deleteUomConversionFactor(
    @graphql.Args() args: DeleteUomConversionFactorArgs
  ): Promise<UomConversionFactor | null> {
    try {
      return await this.service.deleteUomConversionFactor(args);
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
