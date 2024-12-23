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
import { BankTransactionPayments } from "./BankTransactionPayments";
import { BankTransactionPaymentsCountArgs } from "./BankTransactionPaymentsCountArgs";
import { BankTransactionPaymentsFindManyArgs } from "./BankTransactionPaymentsFindManyArgs";
import { BankTransactionPaymentsFindUniqueArgs } from "./BankTransactionPaymentsFindUniqueArgs";
import { CreateBankTransactionPaymentsArgs } from "./CreateBankTransactionPaymentsArgs";
import { UpdateBankTransactionPaymentsArgs } from "./UpdateBankTransactionPaymentsArgs";
import { DeleteBankTransactionPaymentsArgs } from "./DeleteBankTransactionPaymentsArgs";
import { BankTransactionPaymentsService } from "../bankTransactionPayments.service";
@graphql.Resolver(() => BankTransactionPayments)
export class BankTransactionPaymentsResolverBase {
  constructor(protected readonly service: BankTransactionPaymentsService) {}

  async _bankTransactionPaymentsItemsMeta(
    @graphql.Args() args: BankTransactionPaymentsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BankTransactionPayments])
  async bankTransactionPaymentsItems(
    @graphql.Args() args: BankTransactionPaymentsFindManyArgs
  ): Promise<BankTransactionPayments[]> {
    return this.service.bankTransactionPaymentsItems(args);
  }

  @graphql.Query(() => BankTransactionPayments, { nullable: true })
  async bankTransactionPayments(
    @graphql.Args() args: BankTransactionPaymentsFindUniqueArgs
  ): Promise<BankTransactionPayments | null> {
    const result = await this.service.bankTransactionPayments(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BankTransactionPayments)
  async createBankTransactionPayments(
    @graphql.Args() args: CreateBankTransactionPaymentsArgs
  ): Promise<BankTransactionPayments> {
    return await this.service.createBankTransactionPayments({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BankTransactionPayments)
  async updateBankTransactionPayments(
    @graphql.Args() args: UpdateBankTransactionPaymentsArgs
  ): Promise<BankTransactionPayments | null> {
    try {
      return await this.service.updateBankTransactionPayments({
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

  @graphql.Mutation(() => BankTransactionPayments)
  async deleteBankTransactionPayments(
    @graphql.Args() args: DeleteBankTransactionPaymentsArgs
  ): Promise<BankTransactionPayments | null> {
    try {
      return await this.service.deleteBankTransactionPayments(args);
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
