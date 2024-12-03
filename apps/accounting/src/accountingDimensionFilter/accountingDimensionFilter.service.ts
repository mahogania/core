import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountingDimensionFilterServiceBase } from "./base/accountingDimensionFilter.service.base";

@Injectable()
export class AccountingDimensionFilterService extends AccountingDimensionFilterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
