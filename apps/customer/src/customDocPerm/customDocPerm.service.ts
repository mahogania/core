import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomDocPermServiceBase } from "./base/customDocPerm.service.base";

@Injectable()
export class CustomDocPermService extends CustomDocPermServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
