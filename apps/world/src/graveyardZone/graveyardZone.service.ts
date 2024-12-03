import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GraveyardZoneServiceBase } from "./base/graveyardZone.service.base";

@Injectable()
export class GraveyardZoneService extends GraveyardZoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
