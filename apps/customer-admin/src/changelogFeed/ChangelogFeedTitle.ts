import { ChangelogFeed as TChangelogFeed } from "../api/changelogFeed/ChangelogFeed";

export const CHANGELOGFEED_TITLE_FIELD = "appName";

export const ChangelogFeedTitle = (record: TChangelogFeed): string => {
  return record.appName?.toString() || String(record.id);
};
