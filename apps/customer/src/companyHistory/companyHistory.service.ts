import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyHistoryServiceBase } from "./base/companyHistory.service.base";

@Injectable()
export class CompanyHistoryService extends CompanyHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
