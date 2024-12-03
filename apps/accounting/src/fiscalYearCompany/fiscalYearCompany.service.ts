import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FiscalYearCompanyServiceBase } from "./base/fiscalYearCompany.service.base";

@Injectable()
export class FiscalYearCompanyService extends FiscalYearCompanyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
