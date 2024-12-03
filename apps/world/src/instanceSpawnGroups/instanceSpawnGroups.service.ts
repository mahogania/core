import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstanceSpawnGroupsServiceBase } from "./base/instanceSpawnGroups.service.base";

@Injectable()
export class InstanceSpawnGroupsService extends InstanceSpawnGroupsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
