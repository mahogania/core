import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PageTextLocaleServiceBase } from "./base/pageTextLocale.service.base";

@Injectable()
export class PageTextLocaleService extends PageTextLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
