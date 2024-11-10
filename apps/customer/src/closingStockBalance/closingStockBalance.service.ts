import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClosingStockBalanceServiceBase } from "./base/closingStockBalance.service.base";

@Injectable()
export class ClosingStockBalanceService extends ClosingStockBalanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
