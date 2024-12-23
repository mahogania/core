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
import { SalesInvoiceTimesheet } from "./SalesInvoiceTimesheet";
import { SalesInvoiceTimesheetCountArgs } from "./SalesInvoiceTimesheetCountArgs";
import { SalesInvoiceTimesheetFindManyArgs } from "./SalesInvoiceTimesheetFindManyArgs";
import { SalesInvoiceTimesheetFindUniqueArgs } from "./SalesInvoiceTimesheetFindUniqueArgs";
import { CreateSalesInvoiceTimesheetArgs } from "./CreateSalesInvoiceTimesheetArgs";
import { UpdateSalesInvoiceTimesheetArgs } from "./UpdateSalesInvoiceTimesheetArgs";
import { DeleteSalesInvoiceTimesheetArgs } from "./DeleteSalesInvoiceTimesheetArgs";
import { SalesInvoiceTimesheetService } from "../salesInvoiceTimesheet.service";
@graphql.Resolver(() => SalesInvoiceTimesheet)
export class SalesInvoiceTimesheetResolverBase {
  constructor(protected readonly service: SalesInvoiceTimesheetService) {}

  async _salesInvoiceTimesheetsMeta(
    @graphql.Args() args: SalesInvoiceTimesheetCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SalesInvoiceTimesheet])
  async salesInvoiceTimesheets(
    @graphql.Args() args: SalesInvoiceTimesheetFindManyArgs
  ): Promise<SalesInvoiceTimesheet[]> {
    return this.service.salesInvoiceTimesheets(args);
  }

  @graphql.Query(() => SalesInvoiceTimesheet, { nullable: true })
  async salesInvoiceTimesheet(
    @graphql.Args() args: SalesInvoiceTimesheetFindUniqueArgs
  ): Promise<SalesInvoiceTimesheet | null> {
    const result = await this.service.salesInvoiceTimesheet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SalesInvoiceTimesheet)
  async createSalesInvoiceTimesheet(
    @graphql.Args() args: CreateSalesInvoiceTimesheetArgs
  ): Promise<SalesInvoiceTimesheet> {
    return await this.service.createSalesInvoiceTimesheet({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SalesInvoiceTimesheet)
  async updateSalesInvoiceTimesheet(
    @graphql.Args() args: UpdateSalesInvoiceTimesheetArgs
  ): Promise<SalesInvoiceTimesheet | null> {
    try {
      return await this.service.updateSalesInvoiceTimesheet({
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

  @graphql.Mutation(() => SalesInvoiceTimesheet)
  async deleteSalesInvoiceTimesheet(
    @graphql.Args() args: DeleteSalesInvoiceTimesheetArgs
  ): Promise<SalesInvoiceTimesheet | null> {
    try {
      return await this.service.deleteSalesInvoiceTimesheet(args);
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
