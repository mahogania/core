import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DefaultValueServiceBase } from "./base/defaultValue.service.base";

@Injectable()
export class DefaultValueService extends DefaultValueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
