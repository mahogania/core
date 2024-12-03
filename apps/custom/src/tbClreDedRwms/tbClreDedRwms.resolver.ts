import * as graphql from "@nestjs/graphql";
import { TbClreDedRwmsResolverBase } from "./base/tbClreDedRwms.resolver.base";
import { TbClreDedRwms } from "./base/TbClreDedRwms";
import { TbClreDedRwmsService } from "./tbClreDedRwms.service";

@graphql.Resolver(() => TbClreDedRwms)
export class TbClreDedRwmsResolver extends TbClreDedRwmsResolverBase {
  constructor(protected readonly service: TbClreDedRwmsService) {
    super(service);
  }
}
