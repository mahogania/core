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
import { Driver } from "./Driver";
import { DriverCountArgs } from "./DriverCountArgs";
import { DriverFindManyArgs } from "./DriverFindManyArgs";
import { DriverFindUniqueArgs } from "./DriverFindUniqueArgs";
import { DeleteDriverArgs } from "./DeleteDriverArgs";
import { DriverService } from "../driver.service";
@graphql.Resolver(() => Driver)
export class DriverResolverBase {
  constructor(protected readonly service: DriverService) {}

  async _driversMeta(
    @graphql.Args() args: DriverCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Driver])
  async drivers(@graphql.Args() args: DriverFindManyArgs): Promise<Driver[]> {
    return this.service.drivers(args);
  }

  @graphql.Query(() => Driver, { nullable: true })
  async driver(
    @graphql.Args() args: DriverFindUniqueArgs
  ): Promise<Driver | null> {
    const result = await this.service.driver(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Driver)
  async deleteDriver(
    @graphql.Args() args: DeleteDriverArgs
  ): Promise<Driver | null> {
    try {
      return await this.service.deleteDriver(args);
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
