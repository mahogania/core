import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailGroupServiceBase } from "./base/emailGroup.service.base";

@Injectable()
export class EmailGroupService extends EmailGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
