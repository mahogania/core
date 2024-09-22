import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OutdoorpvpTemplateServiceBase } from "./base/outdoorpvpTemplate.service.base";

@Injectable()
export class OutdoorpvpTemplateService extends OutdoorpvpTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
