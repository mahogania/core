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
import { WorkOrderItem } from "./WorkOrderItem";
import { WorkOrderItemCountArgs } from "./WorkOrderItemCountArgs";
import { WorkOrderItemFindManyArgs } from "./WorkOrderItemFindManyArgs";
import { WorkOrderItemFindUniqueArgs } from "./WorkOrderItemFindUniqueArgs";
import { DeleteWorkOrderItemArgs } from "./DeleteWorkOrderItemArgs";
import { WorkOrderItemService } from "../workOrderItem.service";
@graphql.Resolver(() => WorkOrderItem)
export class WorkOrderItemResolverBase {
  constructor(protected readonly service: WorkOrderItemService) {}

  async _workOrderItemsMeta(
    @graphql.Args() args: WorkOrderItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [WorkOrderItem])
  async workOrderItems(
    @graphql.Args() args: WorkOrderItemFindManyArgs
  ): Promise<WorkOrderItem[]> {
    return this.service.workOrderItems(args);
  }

  @graphql.Query(() => WorkOrderItem, { nullable: true })
  async workOrderItem(
    @graphql.Args() args: WorkOrderItemFindUniqueArgs
  ): Promise<WorkOrderItem | null> {
    const result = await this.service.workOrderItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => WorkOrderItem)
  async deleteWorkOrderItem(
    @graphql.Args() args: DeleteWorkOrderItemArgs
  ): Promise<WorkOrderItem | null> {
    try {
      return await this.service.deleteWorkOrderItem(args);
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