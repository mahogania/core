import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocationProfileServiceBase } from "./base/locationProfile.service.base";

@Injectable()
export class LocationProfileService extends LocationProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
