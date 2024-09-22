import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerchoiceLocaleServiceBase } from "./base/playerchoiceLocale.service.base";

@Injectable()
export class PlayerchoiceLocaleService extends PlayerchoiceLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
