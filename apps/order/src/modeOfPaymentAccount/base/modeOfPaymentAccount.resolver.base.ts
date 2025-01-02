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
import { ModeOfPaymentAccount } from "./ModeOfPaymentAccount";
import { ModeOfPaymentAccountCountArgs } from "./ModeOfPaymentAccountCountArgs";
import { ModeOfPaymentAccountFindManyArgs } from "./ModeOfPaymentAccountFindManyArgs";
import { ModeOfPaymentAccountFindUniqueArgs } from "./ModeOfPaymentAccountFindUniqueArgs";
import { CreateModeOfPaymentAccountArgs } from "./CreateModeOfPaymentAccountArgs";
import { UpdateModeOfPaymentAccountArgs } from "./UpdateModeOfPaymentAccountArgs";
import { DeleteModeOfPaymentAccountArgs } from "./DeleteModeOfPaymentAccountArgs";
import { ModeOfPaymentAccountService } from "../modeOfPaymentAccount.service";
@graphql.Resolver(() => ModeOfPaymentAccount)
export class ModeOfPaymentAccountResolverBase {
  constructor(protected readonly service: ModeOfPaymentAccountService) {}

  async _modeOfPaymentAccountsMeta(
    @graphql.Args() args: ModeOfPaymentAccountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ModeOfPaymentAccount])
  async modeOfPaymentAccounts(
    @graphql.Args() args: ModeOfPaymentAccountFindManyArgs
  ): Promise<ModeOfPaymentAccount[]> {
    return this.service.modeOfPaymentAccounts(args);
  }

  @graphql.Query(() => ModeOfPaymentAccount, { nullable: true })
  async modeOfPaymentAccount(
    @graphql.Args() args: ModeOfPaymentAccountFindUniqueArgs
  ): Promise<ModeOfPaymentAccount | null> {
    const result = await this.service.modeOfPaymentAccount(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ModeOfPaymentAccount)
  async createModeOfPaymentAccount(
    @graphql.Args() args: CreateModeOfPaymentAccountArgs
  ): Promise<ModeOfPaymentAccount> {
    return await this.service.createModeOfPaymentAccount({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ModeOfPaymentAccount)
  async updateModeOfPaymentAccount(
    @graphql.Args() args: UpdateModeOfPaymentAccountArgs
  ): Promise<ModeOfPaymentAccount | null> {
    try {
      return await this.service.updateModeOfPaymentAccount({
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

  @graphql.Mutation(() => ModeOfPaymentAccount)
  async deleteModeOfPaymentAccount(
    @graphql.Args() args: DeleteModeOfPaymentAccountArgs
  ): Promise<ModeOfPaymentAccount | null> {
    try {
      return await this.service.deleteModeOfPaymentAccount(args);
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