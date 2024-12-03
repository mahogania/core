import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureTemplateSparringServiceBase } from "./base/creatureTemplateSparring.service.base";

@Injectable()
export class CreatureTemplateSparringService extends CreatureTemplateSparringServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
