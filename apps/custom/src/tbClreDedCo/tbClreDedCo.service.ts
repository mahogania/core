import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedCoServiceBase } from "./base/tbClreDedCo.service.base";

@Injectable()
export class TbClreDedCoService extends TbClreDedCoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
