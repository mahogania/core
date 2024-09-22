import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerRacestatsServiceBase } from "./base/playerRacestats.service.base";

@Injectable()
export class PlayerRacestatsService extends PlayerRacestatsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
