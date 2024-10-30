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
import { AccountingDimension } from "./AccountingDimension";
import { AccountingDimensionCountArgs } from "./AccountingDimensionCountArgs";
import { AccountingDimensionFindManyArgs } from "./AccountingDimensionFindManyArgs";
import { AccountingDimensionFindUniqueArgs } from "./AccountingDimensionFindUniqueArgs";
import { CreateAccountingDimensionArgs } from "./CreateAccountingDimensionArgs";
import { UpdateAccountingDimensionArgs } from "./UpdateAccountingDimensionArgs";
import { DeleteAccountingDimensionArgs } from "./DeleteAccountingDimensionArgs";
import { AccountingDimensionService } from "../accountingDimension.service";
@graphql.Resolver(() => AccountingDimension)
export class AccountingDimensionResolverBase {
  constructor(protected readonly service: AccountingDimensionService) {}

  async _accountingDimensionsMeta(
    @graphql.Args() args: AccountingDimensionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AccountingDimension])
  async accountingDimensions(
    @graphql.Args() args: AccountingDimensionFindManyArgs
  ): Promise<AccountingDimension[]> {
    return this.service.accountingDimensions(args);
  }

  @graphql.Query(() => AccountingDimension, { nullable: true })
  async accountingDimension(
    @graphql.Args() args: AccountingDimensionFindUniqueArgs
  ): Promise<AccountingDimension | null> {
    const result = await this.service.accountingDimension(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AccountingDimension)
  async createAccountingDimension(
    @graphql.Args() args: CreateAccountingDimensionArgs
  ): Promise<AccountingDimension> {
    return await this.service.createAccountingDimension({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AccountingDimension)
  async updateAccountingDimension(
    @graphql.Args() args: UpdateAccountingDimensionArgs
  ): Promise<AccountingDimension | null> {
    try {
      return await this.service.updateAccountingDimension({
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

  @graphql.Mutation(() => AccountingDimension)
  async deleteAccountingDimension(
    @graphql.Args() args: DeleteAccountingDimensionArgs
  ): Promise<AccountingDimension | null> {
    try {
      return await this.service.deleteAccountingDimension(args);
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
