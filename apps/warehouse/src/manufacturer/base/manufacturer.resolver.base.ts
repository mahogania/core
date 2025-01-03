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
import { Manufacturer } from "./Manufacturer";
import { ManufacturerCountArgs } from "./ManufacturerCountArgs";
import { ManufacturerFindManyArgs } from "./ManufacturerFindManyArgs";
import { ManufacturerFindUniqueArgs } from "./ManufacturerFindUniqueArgs";
import { DeleteManufacturerArgs } from "./DeleteManufacturerArgs";
import { ManufacturerService } from "../manufacturer.service";
@graphql.Resolver(() => Manufacturer)
export class ManufacturerResolverBase {
  constructor(protected readonly service: ManufacturerService) {}

  async _manufacturersMeta(
    @graphql.Args() args: ManufacturerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Manufacturer])
  async manufacturers(
    @graphql.Args() args: ManufacturerFindManyArgs
  ): Promise<Manufacturer[]> {
    return this.service.manufacturers(args);
  }

  @graphql.Query(() => Manufacturer, { nullable: true })
  async manufacturer(
    @graphql.Args() args: ManufacturerFindUniqueArgs
  ): Promise<Manufacturer | null> {
    const result = await this.service.manufacturer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Manufacturer)
  async deleteManufacturer(
    @graphql.Args() args: DeleteManufacturerArgs
  ): Promise<Manufacturer | null> {
    try {
      return await this.service.deleteManufacturer(args);
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
