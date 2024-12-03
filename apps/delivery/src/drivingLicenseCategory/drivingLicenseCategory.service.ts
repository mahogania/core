import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DrivingLicenseCategoryServiceBase } from "./base/drivingLicenseCategory.service.base";

@Injectable()
export class DrivingLicenseCategoryService extends DrivingLicenseCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
