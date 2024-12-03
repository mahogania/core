import { ShipmentParcelTemplateWhereInput } from "./ShipmentParcelTemplateWhereInput";
import { ShipmentParcelTemplateOrderByInput } from "./ShipmentParcelTemplateOrderByInput";

export type ShipmentParcelTemplateFindManyArgs = {
  where?: ShipmentParcelTemplateWhereInput;
  orderBy?: Array<ShipmentParcelTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
