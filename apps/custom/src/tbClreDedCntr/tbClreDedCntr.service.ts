import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedCntrServiceBase } from "./base/tbClreDedCntr.service.base";

@Injectable()
export class TbClreDedCntrService extends TbClreDedCntrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
