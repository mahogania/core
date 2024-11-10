import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResponseLocaleServiceBase } from "./base/responseLocale.service.base";

@Injectable()
export class ResponseLocaleService extends ResponseLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
