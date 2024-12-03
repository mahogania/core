import * as graphql from "@nestjs/graphql";
import { SerialAndBatchBundleResolverBase } from "./base/serialAndBatchBundle.resolver.base";
import { SerialAndBatchBundle } from "./base/SerialAndBatchBundle";
import { SerialAndBatchBundleService } from "./serialAndBatchBundle.service";

@graphql.Resolver(() => SerialAndBatchBundle)
export class SerialAndBatchBundleResolver extends SerialAndBatchBundleResolverBase {
  constructor(protected readonly service: SerialAndBatchBundleService) {
    super(service);
  }
}
