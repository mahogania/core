import { ChangelogFeedWhereInput } from "./ChangelogFeedWhereInput";
import { ChangelogFeedOrderByInput } from "./ChangelogFeedOrderByInput";

export type ChangelogFeedFindManyArgs = {
  where?: ChangelogFeedWhereInput;
  orderBy?: Array<ChangelogFeedOrderByInput>;
  skip?: number;
  take?: number;
};
