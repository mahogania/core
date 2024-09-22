import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureTemplateGossipServiceBase } from "./base/creatureTemplateGossip.service.base";

@Injectable()
export class CreatureTemplateGossipService extends CreatureTemplateGossipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
