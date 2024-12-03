import * as graphql from "@nestjs/graphql";
import { TbClreDedCntrResolverBase } from "./base/tbClreDedCntr.resolver.base";
import { TbClreDedCntr } from "./base/TbClreDedCntr";
import { TbClreDedCntrService } from "./tbClreDedCntr.service";

@graphql.Resolver(() => TbClreDedCntr)
export class TbClreDedCntrResolver extends TbClreDedCntrResolverBase {
  constructor(protected readonly service: TbClreDedCntrService) {
    super(service);
  }
}
