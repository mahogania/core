import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeInternalWorkHistoryServiceBase } from "./base/employeeInternalWorkHistory.service.base";

@Injectable()
export class EmployeeInternalWorkHistoryService extends EmployeeInternalWorkHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
