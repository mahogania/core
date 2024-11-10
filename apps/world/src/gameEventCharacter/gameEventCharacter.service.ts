import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventCharacterServiceBase } from "./base/gameEventCharacter.service.base";

@Injectable()
export class GameEventCharacterService extends GameEventCharacterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
