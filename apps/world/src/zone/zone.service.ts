import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ZoneServiceBase } from "./base/zone.service.base";

@Injectable()
export class ZoneService extends ZoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
