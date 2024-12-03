import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscountedInvoiceServiceBase } from "./base/discountedInvoice.service.base";

@Injectable()
export class DiscountedInvoiceService extends DiscountedInvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
