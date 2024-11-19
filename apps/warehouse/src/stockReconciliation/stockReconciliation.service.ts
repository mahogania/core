import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockReconciliationServiceBase } from "./base/stockReconciliation.service.base";

@Injectable()
export class StockReconciliationService extends StockReconciliationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
