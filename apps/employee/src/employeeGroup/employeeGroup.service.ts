import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeGroupServiceBase } from "./base/employeeGroup.service.base";

@Injectable()
export class EmployeeGroupService extends EmployeeGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
