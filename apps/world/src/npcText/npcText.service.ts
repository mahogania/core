import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NpcTextServiceBase } from "./base/npcText.service.base";

@Injectable()
export class NpcTextService extends NpcTextServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
