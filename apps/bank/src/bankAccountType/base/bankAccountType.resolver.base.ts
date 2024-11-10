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
import { BankAccountType } from "./BankAccountType";
import { BankAccountTypeCountArgs } from "./BankAccountTypeCountArgs";
import { BankAccountTypeFindManyArgs } from "./BankAccountTypeFindManyArgs";
import { BankAccountTypeFindUniqueArgs } from "./BankAccountTypeFindUniqueArgs";
import { CreateBankAccountTypeArgs } from "./CreateBankAccountTypeArgs";
import { UpdateBankAccountTypeArgs } from "./UpdateBankAccountTypeArgs";
import { DeleteBankAccountTypeArgs } from "./DeleteBankAccountTypeArgs";
import { BankAccountTypeService } from "../bankAccountType.service";
@graphql.Resolver(() => BankAccountType)
export class BankAccountTypeResolverBase {
  constructor(protected readonly service: BankAccountTypeService) {}

  async _bankAccountTypesMeta(
    @graphql.Args() args: BankAccountTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BankAccountType])
  async bankAccountTypes(
    @graphql.Args() args: BankAccountTypeFindManyArgs
  ): Promise<BankAccountType[]> {
    return this.service.bankAccountTypes(args);
  }

  @graphql.Query(() => BankAccountType, { nullable: true })
  async bankAccountType(
    @graphql.Args() args: BankAccountTypeFindUniqueArgs
  ): Promise<BankAccountType | null> {
    const result = await this.service.bankAccountType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BankAccountType)
  async createBankAccountType(
    @graphql.Args() args: CreateBankAccountTypeArgs
  ): Promise<BankAccountType> {
    return await this.service.createBankAccountType({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BankAccountType)
  async updateBankAccountType(
    @graphql.Args() args: UpdateBankAccountTypeArgs
  ): Promise<BankAccountType | null> {
    try {
      return await this.service.updateBankAccountType({
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

  @graphql.Mutation(() => BankAccountType)
  async deleteBankAccountType(
    @graphql.Args() args: DeleteBankAccountTypeArgs
  ): Promise<BankAccountType | null> {
    try {
      return await this.service.deleteBankAccountType(args);
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