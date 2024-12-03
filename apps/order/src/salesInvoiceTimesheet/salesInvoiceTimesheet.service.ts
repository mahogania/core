import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesInvoiceTimesheetServiceBase } from "./base/salesInvoiceTimesheet.service.base";

@Injectable()
export class SalesInvoiceTimesheetService extends SalesInvoiceTimesheetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
