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
import { LedgerHealthMonitorCompany } from "./LedgerHealthMonitorCompany";
import { LedgerHealthMonitorCompanyCountArgs } from "./LedgerHealthMonitorCompanyCountArgs";
import { LedgerHealthMonitorCompanyFindManyArgs } from "./LedgerHealthMonitorCompanyFindManyArgs";
import { LedgerHealthMonitorCompanyFindUniqueArgs } from "./LedgerHealthMonitorCompanyFindUniqueArgs";
import { CreateLedgerHealthMonitorCompanyArgs } from "./CreateLedgerHealthMonitorCompanyArgs";
import { UpdateLedgerHealthMonitorCompanyArgs } from "./UpdateLedgerHealthMonitorCompanyArgs";
import { DeleteLedgerHealthMonitorCompanyArgs } from "./DeleteLedgerHealthMonitorCompanyArgs";
import { LedgerHealthMonitorCompanyService } from "../ledgerHealthMonitorCompany.service";
@graphql.Resolver(() => LedgerHealthMonitorCompany)
export class LedgerHealthMonitorCompanyResolverBase {
  constructor(protected readonly service: LedgerHealthMonitorCompanyService) {}

  async _ledgerHealthMonitorCompaniesMeta(
    @graphql.Args() args: LedgerHealthMonitorCompanyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LedgerHealthMonitorCompany])
  async ledgerHealthMonitorCompanies(
    @graphql.Args() args: LedgerHealthMonitorCompanyFindManyArgs
  ): Promise<LedgerHealthMonitorCompany[]> {
    return this.service.ledgerHealthMonitorCompanies(args);
  }

  @graphql.Query(() => LedgerHealthMonitorCompany, { nullable: true })
  async ledgerHealthMonitorCompany(
    @graphql.Args() args: LedgerHealthMonitorCompanyFindUniqueArgs
  ): Promise<LedgerHealthMonitorCompany | null> {
    const result = await this.service.ledgerHealthMonitorCompany(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LedgerHealthMonitorCompany)
  async createLedgerHealthMonitorCompany(
    @graphql.Args() args: CreateLedgerHealthMonitorCompanyArgs
  ): Promise<LedgerHealthMonitorCompany> {
    return await this.service.createLedgerHealthMonitorCompany({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => LedgerHealthMonitorCompany)
  async updateLedgerHealthMonitorCompany(
    @graphql.Args() args: UpdateLedgerHealthMonitorCompanyArgs
  ): Promise<LedgerHealthMonitorCompany | null> {
    try {
      return await this.service.updateLedgerHealthMonitorCompany({
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

  @graphql.Mutation(() => LedgerHealthMonitorCompany)
  async deleteLedgerHealthMonitorCompany(
    @graphql.Args() args: DeleteLedgerHealthMonitorCompanyArgs
  ): Promise<LedgerHealthMonitorCompany | null> {
    try {
      return await this.service.deleteLedgerHealthMonitorCompany(args);
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
