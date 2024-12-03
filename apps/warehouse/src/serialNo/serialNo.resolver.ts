import * as graphql from "@nestjs/graphql";
import { SerialNoResolverBase } from "./base/serialNo.resolver.base";
import { SerialNo } from "./base/SerialNo";
import { SerialNoService } from "./serialNo.service";

@graphql.Resolver(() => SerialNo)
export class SerialNoResolver extends SerialNoResolverBase {
  constructor(protected readonly service: SerialNoService) {
    super(service);
  }
}
