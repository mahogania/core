import * as graphql from "@nestjs/graphql";
import { SalesInvoiceTimesheetResolverBase } from "./base/salesInvoiceTimesheet.resolver.base";
import { SalesInvoiceTimesheet } from "./base/SalesInvoiceTimesheet";
import { SalesInvoiceTimesheetService } from "./salesInvoiceTimesheet.service";

@graphql.Resolver(() => SalesInvoiceTimesheet)
export class SalesInvoiceTimesheetResolver extends SalesInvoiceTimesheetResolverBase {
  constructor(protected readonly service: SalesInvoiceTimesheetService) {
    super(service);
  }
}
