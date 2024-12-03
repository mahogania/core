import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosFieldServiceBase } from "./base/posField.service.base";

@Injectable()
export class PosFieldService extends PosFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
