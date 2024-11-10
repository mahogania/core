import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AllowedDimensionServiceBase } from "./base/allowedDimension.service.base";

@Injectable()
export class AllowedDimensionService extends AllowedDimensionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
