import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactEmailServiceBase } from "./base/contactEmail.service.base";

@Injectable()
export class ContactEmailService extends ContactEmailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
