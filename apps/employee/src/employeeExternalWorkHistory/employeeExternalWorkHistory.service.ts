import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeExternalWorkHistoryServiceBase } from "./base/employeeExternalWorkHistory.service.base";

@Injectable()
export class EmployeeExternalWorkHistoryService extends EmployeeExternalWorkHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
