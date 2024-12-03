import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactPhoneServiceBase } from "./base/contactPhone.service.base";

@Injectable()
export class ContactPhoneService extends ContactPhoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
