import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockReconciliationItemServiceBase } from "./base/stockReconciliationItem.service.base";

@Injectable()
export class StockReconciliationItemService extends StockReconciliationItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
