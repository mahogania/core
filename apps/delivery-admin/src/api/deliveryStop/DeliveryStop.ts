export type DeliveryStop = {
  address: string | null;
  contact: string | null;
  createdAt: Date;
  creation: Date | null;
  customer: string | null;
  customerAddress: string | null;
  customerContact: string | null;
  deliveryNote: string | null;
  details: string | null;
  distance: number | null;
  docstatus: number | null;
  emailSentTo: string | null;
  estimatedArrival: Date | null;
  grandTotal: number | null;
  id: string;
  idx: number | null;
  lat: number | null;
  lng: number | null;
  locked: boolean | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  owner: string | null;
  parent: string | null;
  parentfield: string | null;
  parenttype: string | null;
  uom: string | null;
  updatedAt: Date;
  visited: boolean | null;
};
