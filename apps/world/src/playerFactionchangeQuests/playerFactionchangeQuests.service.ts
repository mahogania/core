import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerFactionchangeQuestsServiceBase } from "./base/playerFactionchangeQuests.service.base";

@Injectable()
export class PlayerFactionchangeQuestsService extends PlayerFactionchangeQuestsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
