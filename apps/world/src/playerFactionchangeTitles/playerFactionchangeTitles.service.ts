import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerFactionchangeTitlesServiceBase } from "./base/playerFactionchangeTitles.service.base";

@Injectable()
export class PlayerFactionchangeTitlesService extends PlayerFactionchangeTitlesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
