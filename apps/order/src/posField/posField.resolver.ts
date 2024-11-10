import * as graphql from "@nestjs/graphql";
import { PosFieldResolverBase } from "./base/posField.resolver.base";
import { PosField } from "./base/PosField";
import { PosFieldService } from "./posField.service";

@graphql.Resolver(() => PosField)
export class PosFieldResolver extends PosFieldResolverBase {
  constructor(protected readonly service: PosFieldService) {
    super(service);
  }
}
