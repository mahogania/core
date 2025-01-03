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
import { SubcontractingOrderSuppliedItem } from "./SubcontractingOrderSuppliedItem";
import { SubcontractingOrderSuppliedItemCountArgs } from "./SubcontractingOrderSuppliedItemCountArgs";
import { SubcontractingOrderSuppliedItemFindManyArgs } from "./SubcontractingOrderSuppliedItemFindManyArgs";
import { SubcontractingOrderSuppliedItemFindUniqueArgs } from "./SubcontractingOrderSuppliedItemFindUniqueArgs";
import { DeleteSubcontractingOrderSuppliedItemArgs } from "./DeleteSubcontractingOrderSuppliedItemArgs";
import { SubcontractingOrderSuppliedItemService } from "../subcontractingOrderSuppliedItem.service";
@graphql.Resolver(() => SubcontractingOrderSuppliedItem)
export class SubcontractingOrderSuppliedItemResolverBase {
  constructor(
    protected readonly service: SubcontractingOrderSuppliedItemService
  ) {}

  async _subcontractingOrderSuppliedItemsMeta(
    @graphql.Args() args: SubcontractingOrderSuppliedItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SubcontractingOrderSuppliedItem])
  async subcontractingOrderSuppliedItems(
    @graphql.Args() args: SubcontractingOrderSuppliedItemFindManyArgs
  ): Promise<SubcontractingOrderSuppliedItem[]> {
    return this.service.subcontractingOrderSuppliedItems(args);
  }

  @graphql.Query(() => SubcontractingOrderSuppliedItem, { nullable: true })
  async subcontractingOrderSuppliedItem(
    @graphql.Args() args: SubcontractingOrderSuppliedItemFindUniqueArgs
  ): Promise<SubcontractingOrderSuppliedItem | null> {
    const result = await this.service.subcontractingOrderSuppliedItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SubcontractingOrderSuppliedItem)
  async deleteSubcontractingOrderSuppliedItem(
    @graphql.Args() args: DeleteSubcontractingOrderSuppliedItemArgs
  ): Promise<SubcontractingOrderSuppliedItem | null> {
    try {
      return await this.service.deleteSubcontractingOrderSuppliedItem(args);
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
