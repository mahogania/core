import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CharacterDialogueServiceBase } from "./base/characterDialogue.service.base";

@Injectable()
export class CharacterDialogueService extends CharacterDialogueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
