import * as graphql from "@nestjs/graphql";
import { TbClreDedMgResolverBase } from "./base/tbClreDedMg.resolver.base";
import { TbClreDedMg } from "./base/TbClreDedMg";
import { TbClreDedMgService } from "./tbClreDedMg.service";

@graphql.Resolver(() => TbClreDedMg)
export class TbClreDedMgResolver extends TbClreDedMgResolverBase {
  constructor(protected readonly service: TbClreDedMgService) {
    super(service);
  }
}
