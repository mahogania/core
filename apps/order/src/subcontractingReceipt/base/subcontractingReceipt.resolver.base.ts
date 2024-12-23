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
import { SubcontractingReceipt } from "./SubcontractingReceipt";
import { SubcontractingReceiptCountArgs } from "./SubcontractingReceiptCountArgs";
import { SubcontractingReceiptFindManyArgs } from "./SubcontractingReceiptFindManyArgs";
import { SubcontractingReceiptFindUniqueArgs } from "./SubcontractingReceiptFindUniqueArgs";
import { DeleteSubcontractingReceiptArgs } from "./DeleteSubcontractingReceiptArgs";
import { SubcontractingReceiptService } from "../subcontractingReceipt.service";
@graphql.Resolver(() => SubcontractingReceipt)
export class SubcontractingReceiptResolverBase {
  constructor(protected readonly service: SubcontractingReceiptService) {}

  async _subcontractingReceiptsMeta(
    @graphql.Args() args: SubcontractingReceiptCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SubcontractingReceipt])
  async subcontractingReceipts(
    @graphql.Args() args: SubcontractingReceiptFindManyArgs
  ): Promise<SubcontractingReceipt[]> {
    return this.service.subcontractingReceipts(args);
  }

  @graphql.Query(() => SubcontractingReceipt, { nullable: true })
  async subcontractingReceipt(
    @graphql.Args() args: SubcontractingReceiptFindUniqueArgs
  ): Promise<SubcontractingReceipt | null> {
    const result = await this.service.subcontractingReceipt(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SubcontractingReceipt)
  async deleteSubcontractingReceipt(
    @graphql.Args() args: DeleteSubcontractingReceiptArgs
  ): Promise<SubcontractingReceipt | null> {
    try {
      return await this.service.deleteSubcontractingReceipt(args);
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
