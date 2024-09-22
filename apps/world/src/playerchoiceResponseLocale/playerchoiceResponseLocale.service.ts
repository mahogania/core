import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerchoiceResponseLocaleServiceBase } from "./base/playerchoiceResponseLocale.service.base";

@Injectable()
export class PlayerchoiceResponseLocaleService extends PlayerchoiceResponseLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
