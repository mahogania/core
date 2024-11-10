import { CommunicationLinkWhereInput } from "./CommunicationLinkWhereInput";
import { CommunicationLinkOrderByInput } from "./CommunicationLinkOrderByInput";

export type CommunicationLinkFindManyArgs = {
  where?: CommunicationLinkWhereInput;
  orderBy?: Array<CommunicationLinkOrderByInput>;
  skip?: number;
  take?: number;
};
