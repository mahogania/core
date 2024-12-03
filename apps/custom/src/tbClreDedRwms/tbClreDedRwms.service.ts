import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedRwmsServiceBase } from "./base/tbClreDedRwms.service.base";

@Injectable()
export class TbClreDedRwmsService extends TbClreDedRwmsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
