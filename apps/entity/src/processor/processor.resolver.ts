import * as graphql from "@nestjs/graphql";
import { ProcessorResolverBase } from "./base/processor.resolver.base";
import { Processor } from "./base/Processor";
import { ProcessorService } from "./processor.service";

@graphql.Resolver(() => Processor)
export class ProcessorResolver extends ProcessorResolverBase {
  constructor(protected readonly service: ProcessorService) {
    super(service);
  }
}
