import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankStatementImportServiceBase } from "./base/bankStatementImport.service.base";

@Injectable()
export class BankStatementImportService extends BankStatementImportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
