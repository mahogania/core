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
import { PaymentRequest } from "./PaymentRequest";
import { PaymentRequestCountArgs } from "./PaymentRequestCountArgs";
import { PaymentRequestFindManyArgs } from "./PaymentRequestFindManyArgs";
import { PaymentRequestFindUniqueArgs } from "./PaymentRequestFindUniqueArgs";
import { CreatePaymentRequestArgs } from "./CreatePaymentRequestArgs";
import { UpdatePaymentRequestArgs } from "./UpdatePaymentRequestArgs";
import { DeletePaymentRequestArgs } from "./DeletePaymentRequestArgs";
import { PaymentRequestService } from "../paymentRequest.service";
@graphql.Resolver(() => PaymentRequest)
export class PaymentRequestResolverBase {
  constructor(protected readonly service: PaymentRequestService) {}

  async _paymentRequestsMeta(
    @graphql.Args() args: PaymentRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PaymentRequest])
  async paymentRequests(
    @graphql.Args() args: PaymentRequestFindManyArgs
  ): Promise<PaymentRequest[]> {
    return this.service.paymentRequests(args);
  }

  @graphql.Query(() => PaymentRequest, { nullable: true })
  async paymentRequest(
    @graphql.Args() args: PaymentRequestFindUniqueArgs
  ): Promise<PaymentRequest | null> {
    const result = await this.service.paymentRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PaymentRequest)
  async createPaymentRequest(
    @graphql.Args() args: CreatePaymentRequestArgs
  ): Promise<PaymentRequest> {
    return await this.service.createPaymentRequest({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PaymentRequest)
  async updatePaymentRequest(
    @graphql.Args() args: UpdatePaymentRequestArgs
  ): Promise<PaymentRequest | null> {
    try {
      return await this.service.updatePaymentRequest({
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

  @graphql.Mutation(() => PaymentRequest)
  async deletePaymentRequest(
    @graphql.Args() args: DeletePaymentRequestArgs
  ): Promise<PaymentRequest | null> {
    try {
      return await this.service.deletePaymentRequest(args);
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
