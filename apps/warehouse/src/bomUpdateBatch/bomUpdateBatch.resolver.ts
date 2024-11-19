import * as graphql from "@nestjs/graphql";
import { BomUpdateBatchResolverBase } from "./base/bomUpdateBatch.resolver.base";
import { BomUpdateBatch } from "./base/BomUpdateBatch";
import { BomUpdateBatchService } from "./bomUpdateBatch.service";

@graphql.Resolver(() => BomUpdateBatch)
export class BomUpdateBatchResolver extends BomUpdateBatchResolverBase {
  constructor(protected readonly service: BomUpdateBatchService) {
    super(service);
  }
}
