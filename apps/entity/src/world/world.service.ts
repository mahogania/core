import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorldServiceBase } from "./base/world.service.base";

@Injectable()
export class WorldService extends WorldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
