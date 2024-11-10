import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataImportServiceBase } from "./base/dataImport.service.base";

@Injectable()
export class DataImportService extends DataImportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
