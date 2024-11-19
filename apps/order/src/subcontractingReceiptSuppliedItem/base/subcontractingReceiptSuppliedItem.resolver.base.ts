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
import { SubcontractingReceiptSuppliedItem } from "./SubcontractingReceiptSuppliedItem";
import { SubcontractingReceiptSuppliedItemCountArgs } from "./SubcontractingReceiptSuppliedItemCountArgs";
import { SubcontractingReceiptSuppliedItemFindManyArgs } from "./SubcontractingReceiptSuppliedItemFindManyArgs";
import { SubcontractingReceiptSuppliedItemFindUniqueArgs } from "./SubcontractingReceiptSuppliedItemFindUniqueArgs";
import { DeleteSubcontractingReceiptSuppliedItemArgs } from "./DeleteSubcontractingReceiptSuppliedItemArgs";
import { SubcontractingReceiptSuppliedItemService } from "../subcontractingReceiptSuppliedItem.service";
@graphql.Resolver(() => SubcontractingReceiptSuppliedItem)
export class SubcontractingReceiptSuppliedItemResolverBase {
  constructor(
    protected readonly service: SubcontractingReceiptSuppliedItemService
  ) {}

  async _subcontractingReceiptSuppliedItemsMeta(
    @graphql.Args() args: SubcontractingReceiptSuppliedItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SubcontractingReceiptSuppliedItem])
  async subcontractingReceiptSuppliedItems(
    @graphql.Args() args: SubcontractingReceiptSuppliedItemFindManyArgs
  ): Promise<SubcontractingReceiptSuppliedItem[]> {
    return this.service.subcontractingReceiptSuppliedItems(args);
  }

  @graphql.Query(() => SubcontractingReceiptSuppliedItem, { nullable: true })
  async subcontractingReceiptSuppliedItem(
    @graphql.Args() args: SubcontractingReceiptSuppliedItemFindUniqueArgs
  ): Promise<SubcontractingReceiptSuppliedItem | null> {
    const result = await this.service.subcontractingReceiptSuppliedItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SubcontractingReceiptSuppliedItem)
  async deleteSubcontractingReceiptSuppliedItem(
    @graphql.Args() args: DeleteSubcontractingReceiptSuppliedItemArgs
  ): Promise<SubcontractingReceiptSuppliedItem | null> {
    try {
      return await this.service.deleteSubcontractingReceiptSuppliedItem(args);
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