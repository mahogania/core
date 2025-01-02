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
import { SubcontractingOrderItem } from "./SubcontractingOrderItem";
import { SubcontractingOrderItemCountArgs } from "./SubcontractingOrderItemCountArgs";
import { SubcontractingOrderItemFindManyArgs } from "./SubcontractingOrderItemFindManyArgs";
import { SubcontractingOrderItemFindUniqueArgs } from "./SubcontractingOrderItemFindUniqueArgs";
import { DeleteSubcontractingOrderItemArgs } from "./DeleteSubcontractingOrderItemArgs";
import { SubcontractingOrderItemService } from "../subcontractingOrderItem.service";
@graphql.Resolver(() => SubcontractingOrderItem)
export class SubcontractingOrderItemResolverBase {
  constructor(protected readonly service: SubcontractingOrderItemService) {}

  async _subcontractingOrderItemsMeta(
    @graphql.Args() args: SubcontractingOrderItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SubcontractingOrderItem])
  async subcontractingOrderItems(
    @graphql.Args() args: SubcontractingOrderItemFindManyArgs
  ): Promise<SubcontractingOrderItem[]> {
    return this.service.subcontractingOrderItems(args);
  }

  @graphql.Query(() => SubcontractingOrderItem, { nullable: true })
  async subcontractingOrderItem(
    @graphql.Args() args: SubcontractingOrderItemFindUniqueArgs
  ): Promise<SubcontractingOrderItem | null> {
    const result = await this.service.subcontractingOrderItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SubcontractingOrderItem)
  async deleteSubcontractingOrderItem(
    @graphql.Args() args: DeleteSubcontractingOrderItemArgs
  ): Promise<SubcontractingOrderItem | null> {
    try {
      return await this.service.deleteSubcontractingOrderItem(args);
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