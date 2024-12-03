import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChoiceLocaleServiceBase } from "./base/choiceLocale.service.base";

@Injectable()
export class ChoiceLocaleService extends ChoiceLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
