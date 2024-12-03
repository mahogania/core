import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PointOfInterestServiceBase } from "./base/pointOfInterest.service.base";

@Injectable()
export class PointOfInterestService extends PointOfInterestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
