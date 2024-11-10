import * as graphql from "@nestjs/graphql";
import { BatchResolverBase } from "./base/batch.resolver.base";
import { Batch } from "./base/Batch";
import { BatchService } from "./batch.service";

@graphql.Resolver(() => Batch)
export class BatchResolver extends BatchResolverBase {
  constructor(protected readonly service: BatchService) {
    super(service);
  }
}
