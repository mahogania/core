import * as graphql from "@nestjs/graphql";
import { CustomizeFormFieldResolverBase } from "./base/customizeFormField.resolver.base";
import { CustomizeFormField } from "./base/CustomizeFormField";
import { CustomizeFormFieldService } from "./customizeFormField.service";

@graphql.Resolver(() => CustomizeFormField)
export class CustomizeFormFieldResolver extends CustomizeFormFieldResolverBase {
  constructor(protected readonly service: CustomizeFormFieldService) {
    super(service);
  }
}
