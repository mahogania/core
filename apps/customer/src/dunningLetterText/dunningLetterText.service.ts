import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DunningLetterTextServiceBase } from "./base/dunningLetterText.service.base";

@Injectable()
export class DunningLetterTextService extends DunningLetterTextServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
