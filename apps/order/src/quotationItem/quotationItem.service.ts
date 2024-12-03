import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuotationItemServiceBase } from "./base/quotationItem.service.base";

@Injectable()
export class QuotationItemService extends QuotationItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
