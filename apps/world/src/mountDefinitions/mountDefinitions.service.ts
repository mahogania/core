import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MountDefinitionsServiceBase } from "./base/mountDefinitions.service.base";

@Injectable()
export class MountDefinitionsService extends MountDefinitionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
