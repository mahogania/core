import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MapServiceBase } from "./base/map.service.base";

@Injectable()
export class MapService extends MapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
