import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureTextServiceBase } from "./base/creatureText.service.base";

@Injectable()
export class CreatureTextService extends CreatureTextServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
