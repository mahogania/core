export type Shipment = {
  amendedFrom: string | null;
  awbNumber: string | null;
  carrier: string | null;
  carrierService: string | null;
  createdAt: Date;
  creation: Date | null;
  deliveryAddress: string | null;
  deliveryAddressName: string | null;
  deliveryCompany: string | null;
  deliveryContact: string | null;
  deliveryContactEmail: string | null;
  deliveryContactName: string | null;
  deliveryCustomer: string | null;
  deliverySupplier: string | null;
  deliveryTo: string | null;
  deliveryToType: string | null;
  descriptionOfContent: string | null;
  docstatus: number | null;
  id: string;
  idx: number | null;
  incoterm: string | null;
  likedBy: string | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  owner: string | null;
  pallets: string | null;
  parcelTemplate: string | null;
  pickup: string | null;
  pickupAddress: string | null;
  pickupAddressName: string | null;
  pickupCompany: string | null;
  pickupContact: string | null;
  pickupContactEmail: string | null;
  pickupContactName: string | null;
  pickupContactPerson: string | null;
  pickupCustomer: string | null;
  pickupDate: Date | null;
  pickupFrom: Date | null;
  pickupFromType: string | null;
  pickupSupplier: string | null;
  pickupTo: Date | null;
  pickupType: string | null;
  serviceProvider: string | null;
  shipmentAmount: number | null;
  shipmentId: string | null;
  shipmentType: string | null;
  status: string | null;
  trackingStatus: string | null;
  trackingStatusInfo: string | null;
  trackingUrl: string | null;
  updatedAt: Date;
  valueOfGoods: number | null;
};
