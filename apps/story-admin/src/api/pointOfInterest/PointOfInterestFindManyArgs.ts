import { PointOfInterestWhereInput } from "./PointOfInterestWhereInput";
import { PointOfInterestOrderByInput } from "./PointOfInterestOrderByInput";

export type PointOfInterestFindManyArgs = {
  where?: PointOfInterestWhereInput;
  orderBy?: Array<PointOfInterestOrderByInput>;
  skip?: number;
  take?: number;
};
