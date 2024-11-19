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
import { Country } from "./Country";
import { CountryCountArgs } from "./CountryCountArgs";
import { CountryFindManyArgs } from "./CountryFindManyArgs";
import { CountryFindUniqueArgs } from "./CountryFindUniqueArgs";
import { CreateCountryArgs } from "./CreateCountryArgs";
import { UpdateCountryArgs } from "./UpdateCountryArgs";
import { DeleteCountryArgs } from "./DeleteCountryArgs";
import { CountryService } from "../country.service";
@graphql.Resolver(() => Country)
export class CountryResolverBase {
  constructor(protected readonly service: CountryService) {}

  async _countriesMeta(
    @graphql.Args() args: CountryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Country])
  async countries(
    @graphql.Args() args: CountryFindManyArgs
  ): Promise<Country[]> {
    return this.service.countries(args);
  }

  @graphql.Query(() => Country, { nullable: true })
  async country(
    @graphql.Args() args: CountryFindUniqueArgs
  ): Promise<Country | null> {
    const result = await this.service.country(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Country)
  async createCountry(
    @graphql.Args() args: CreateCountryArgs
  ): Promise<Country> {
    return await this.service.createCountry({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Country)
  async updateCountry(
    @graphql.Args() args: UpdateCountryArgs
  ): Promise<Country | null> {
    try {
      return await this.service.updateCountry({
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

  @graphql.Mutation(() => Country)
  async deleteCountry(
    @graphql.Args() args: DeleteCountryArgs
  ): Promise<Country | null> {
    try {
      return await this.service.deleteCountry(args);
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