import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AddressTemplateServiceBase } from "./base/addressTemplate.service.base";

@Injectable()
export class AddressTemplateService extends AddressTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
