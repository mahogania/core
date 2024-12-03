import { StringFilter } from "../../util/StringFilter";
import { PointOfInterestWhereUniqueInput } from "../pointOfInterest/PointOfInterestWhereUniqueInput";

export type PointsOfInterestLocaleWhereInput = {
  id?: StringFilter;
  pointsOfInterest?: PointOfInterestWhereUniqueInput;
};
