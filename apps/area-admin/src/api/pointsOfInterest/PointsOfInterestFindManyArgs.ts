import { PointsOfInterestWhereInput } from "./PointsOfInterestWhereInput";
import { PointsOfInterestOrderByInput } from "./PointsOfInterestOrderByInput";

export type PointsOfInterestFindManyArgs = {
  where?: PointsOfInterestWhereInput;
  orderBy?: Array<PointsOfInterestOrderByInput>;
  skip?: number;
  take?: number;
};
