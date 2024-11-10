import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeGroupTableServiceBase } from "./base/employeeGroupTable.service.base";

@Injectable()
export class EmployeeGroupTableService extends EmployeeGroupTableServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
