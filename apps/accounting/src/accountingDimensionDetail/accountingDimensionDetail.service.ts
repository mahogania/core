import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountingDimensionDetailServiceBase } from "./base/accountingDimensionDetail.service.base";

@Injectable()
export class AccountingDimensionDetailService extends AccountingDimensionDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
