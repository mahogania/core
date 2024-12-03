import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PointsOfInterestServiceBase } from "./base/pointsOfInterest.service.base";

@Injectable()
export class PointsOfInterestService extends PointsOfInterestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
