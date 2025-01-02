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
import { PaymentReconciliation } from "./PaymentReconciliation";
import { PaymentReconciliationCountArgs } from "./PaymentReconciliationCountArgs";
import { PaymentReconciliationFindManyArgs } from "./PaymentReconciliationFindManyArgs";
import { PaymentReconciliationFindUniqueArgs } from "./PaymentReconciliationFindUniqueArgs";
import { CreatePaymentReconciliationArgs } from "./CreatePaymentReconciliationArgs";
import { UpdatePaymentReconciliationArgs } from "./UpdatePaymentReconciliationArgs";
import { DeletePaymentReconciliationArgs } from "./DeletePaymentReconciliationArgs";
import { PaymentReconciliationService } from "../paymentReconciliation.service";
@graphql.Resolver(() => PaymentReconciliation)
export class PaymentReconciliationResolverBase {
  constructor(protected readonly service: PaymentReconciliationService) {}

  async _paymentReconciliationsMeta(
    @graphql.Args() args: PaymentReconciliationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PaymentReconciliation])
  async paymentReconciliations(
    @graphql.Args() args: PaymentReconciliationFindManyArgs
  ): Promise<PaymentReconciliation[]> {
    return this.service.paymentReconciliations(args);
  }

  @graphql.Query(() => PaymentReconciliation, { nullable: true })
  async paymentReconciliation(
    @graphql.Args() args: PaymentReconciliationFindUniqueArgs
  ): Promise<PaymentReconciliation | null> {
    const result = await this.service.paymentReconciliation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PaymentReconciliation)
  async createPaymentReconciliation(
    @graphql.Args() args: CreatePaymentReconciliationArgs
  ): Promise<PaymentReconciliation> {
    return await this.service.createPaymentReconciliation({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PaymentReconciliation)
  async updatePaymentReconciliation(
    @graphql.Args() args: UpdatePaymentReconciliationArgs
  ): Promise<PaymentReconciliation | null> {
    try {
      return await this.service.updatePaymentReconciliation({
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

  @graphql.Mutation(() => PaymentReconciliation)
  async deletePaymentReconciliation(
    @graphql.Args() args: DeletePaymentReconciliationArgs
  ): Promise<PaymentReconciliation | null> {
    try {
      return await this.service.deletePaymentReconciliation(args);
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