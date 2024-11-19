import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpawnGroupServiceBase } from "./base/spawnGroup.service.base";

@Injectable()
export class SpawnGroupService extends SpawnGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
