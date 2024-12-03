import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutoEmailReportServiceBase } from "./base/autoEmailReport.service.base";

@Injectable()
export class AutoEmailReportService extends AutoEmailReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
