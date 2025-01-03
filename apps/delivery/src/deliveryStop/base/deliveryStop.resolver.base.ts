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
import { DeliveryStop } from "./DeliveryStop";
import { DeliveryStopCountArgs } from "./DeliveryStopCountArgs";
import { DeliveryStopFindManyArgs } from "./DeliveryStopFindManyArgs";
import { DeliveryStopFindUniqueArgs } from "./DeliveryStopFindUniqueArgs";
import { CreateDeliveryStopArgs } from "./CreateDeliveryStopArgs";
import { UpdateDeliveryStopArgs } from "./UpdateDeliveryStopArgs";
import { DeleteDeliveryStopArgs } from "./DeleteDeliveryStopArgs";
import { DeliveryStopService } from "../deliveryStop.service";
@graphql.Resolver(() => DeliveryStop)
export class DeliveryStopResolverBase {
  constructor(protected readonly service: DeliveryStopService) {}

  async _deliveryStopsMeta(
    @graphql.Args() args: DeliveryStopCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DeliveryStop])
  async deliveryStops(
    @graphql.Args() args: DeliveryStopFindManyArgs
  ): Promise<DeliveryStop[]> {
    return this.service.deliveryStops(args);
  }

  @graphql.Query(() => DeliveryStop, { nullable: true })
  async deliveryStop(
    @graphql.Args() args: DeliveryStopFindUniqueArgs
  ): Promise<DeliveryStop | null> {
    const result = await this.service.deliveryStop(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DeliveryStop)
  async createDeliveryStop(
    @graphql.Args() args: CreateDeliveryStopArgs
  ): Promise<DeliveryStop> {
    return await this.service.createDeliveryStop({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DeliveryStop)
  async updateDeliveryStop(
    @graphql.Args() args: UpdateDeliveryStopArgs
  ): Promise<DeliveryStop | null> {
    try {
      return await this.service.updateDeliveryStop({
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

  @graphql.Mutation(() => DeliveryStop)
  async deleteDeliveryStop(
    @graphql.Args() args: DeleteDeliveryStopArgs
  ): Promise<DeliveryStop | null> {
    try {
      return await this.service.deleteDeliveryStop(args);
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
