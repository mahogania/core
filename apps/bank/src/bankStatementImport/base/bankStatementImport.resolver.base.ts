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
import { BankStatementImport } from "./BankStatementImport";
import { BankStatementImportCountArgs } from "./BankStatementImportCountArgs";
import { BankStatementImportFindManyArgs } from "./BankStatementImportFindManyArgs";
import { BankStatementImportFindUniqueArgs } from "./BankStatementImportFindUniqueArgs";
import { CreateBankStatementImportArgs } from "./CreateBankStatementImportArgs";
import { UpdateBankStatementImportArgs } from "./UpdateBankStatementImportArgs";
import { DeleteBankStatementImportArgs } from "./DeleteBankStatementImportArgs";
import { BankStatementImportService } from "../bankStatementImport.service";
@graphql.Resolver(() => BankStatementImport)
export class BankStatementImportResolverBase {
  constructor(protected readonly service: BankStatementImportService) {}

  async _bankStatementImportsMeta(
    @graphql.Args() args: BankStatementImportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BankStatementImport])
  async bankStatementImports(
    @graphql.Args() args: BankStatementImportFindManyArgs
  ): Promise<BankStatementImport[]> {
    return this.service.bankStatementImports(args);
  }

  @graphql.Query(() => BankStatementImport, { nullable: true })
  async bankStatementImport(
    @graphql.Args() args: BankStatementImportFindUniqueArgs
  ): Promise<BankStatementImport | null> {
    const result = await this.service.bankStatementImport(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BankStatementImport)
  async createBankStatementImport(
    @graphql.Args() args: CreateBankStatementImportArgs
  ): Promise<BankStatementImport> {
    return await this.service.createBankStatementImport({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BankStatementImport)
  async updateBankStatementImport(
    @graphql.Args() args: UpdateBankStatementImportArgs
  ): Promise<BankStatementImport | null> {
    try {
      return await this.service.updateBankStatementImport({
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

  @graphql.Mutation(() => BankStatementImport)
  async deleteBankStatementImport(
    @graphql.Args() args: DeleteBankStatementImportArgs
  ): Promise<BankStatementImport | null> {
    try {
      return await this.service.deleteBankStatementImport(args);
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
