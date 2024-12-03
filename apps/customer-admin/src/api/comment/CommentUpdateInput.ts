export type CommentUpdateInput = {
  commentBy?: string | null;
  commentEmail?: string | null;
  commentType?: string | null;
  content?: string | null;
  creation?: Date | null;
  docstatus?: number | null;
  idx?: number | null;
  ipAddress?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  owner?: string | null;
  published?: number | null;
  referenceDoctype?: string | null;
  referenceName?: string | null;
  referenceOwner?: string | null;
  seen?: number | null;
  subject?: string | null;
};
