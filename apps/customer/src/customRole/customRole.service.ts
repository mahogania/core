import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomRoleServiceBase } from "./base/customRole.service.base";

@Injectable()
export class CustomRoleService extends CustomRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
