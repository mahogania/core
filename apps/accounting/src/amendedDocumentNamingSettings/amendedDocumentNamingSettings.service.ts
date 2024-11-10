import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AmendedDocumentNamingSettingsServiceBase } from "./base/amendedDocumentNamingSettings.service.base";

@Injectable()
export class AmendedDocumentNamingSettingsService extends AmendedDocumentNamingSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
