import { AddressTemplateWhereInput } from "./AddressTemplateWhereInput";
import { AddressTemplateOrderByInput } from "./AddressTemplateOrderByInput";

export type AddressTemplateFindManyArgs = {
  where?: AddressTemplateWhereInput;
  orderBy?: Array<AddressTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
