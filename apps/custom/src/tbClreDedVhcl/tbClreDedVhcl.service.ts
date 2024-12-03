import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedVhclServiceBase } from "./base/tbClreDedVhcl.service.base";

@Injectable()
export class TbClreDedVhclService extends TbClreDedVhclServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
