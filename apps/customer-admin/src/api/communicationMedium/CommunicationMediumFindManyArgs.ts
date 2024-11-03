import { CommunicationMediumWhereInput } from "./CommunicationMediumWhereInput";
import { CommunicationMediumOrderByInput } from "./CommunicationMediumOrderByInput";

export type CommunicationMediumFindManyArgs = {
  where?: CommunicationMediumWhereInput;
  orderBy?: Array<CommunicationMediumOrderByInput>;
  skip?: number;
  take?: number;
};
