import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataImportLogServiceBase } from "./base/dataImportLog.service.base";

@Injectable()
export class DataImportLogService extends DataImportLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
