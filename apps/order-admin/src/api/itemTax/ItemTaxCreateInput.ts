export type ItemTaxCreateInput = {
  creation?: Date | null;
  docstatus?: number | null;
  idx?: number | null;
  itemTaxTemplate?: string | null;
  maximumNetRate?: number | null;
  minimumNetRate?: number | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  owner?: string | null;
  parent?: string | null;
  parentfield?: string | null;
  parenttype?: string | null;
  taxCategory?: string | null;
  validFrom?: Date | null;
};