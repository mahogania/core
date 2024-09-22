import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PointsOfInterestLocaleServiceBase } from "./base/pointsOfInterestLocale.service.base";

@Injectable()
export class PointsOfInterestLocaleService extends PointsOfInterestLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
