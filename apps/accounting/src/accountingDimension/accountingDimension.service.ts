import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountingDimensionServiceBase } from "./base/accountingDimension.service.base";

@Injectable()
export class AccountingDimensionService extends AccountingDimensionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
