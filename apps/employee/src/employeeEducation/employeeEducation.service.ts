import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeEducationServiceBase } from "./base/employeeEducation.service.base";

@Injectable()
export class EmployeeEducationService extends EmployeeEducationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
