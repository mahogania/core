import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ShipmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="awb_number" source="awbNumber" />
        <TextField label="carrier" source="carrier" />
        <TextField label="carrier_service" source="carrierService" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="delivery_address" source="deliveryAddress" />
        <TextField label="delivery_address_name" source="deliveryAddressName" />
        <TextField label="delivery_company" source="deliveryCompany" />
        <TextField label="delivery_contact" source="deliveryContact" />
        <TextField
          label="delivery_contact_email"
          source="deliveryContactEmail"
        />
        <TextField label="delivery_contact_name" source="deliveryContactName" />
        <TextField label="delivery_customer" source="deliveryCustomer" />
        <TextField label="delivery_supplier" source="deliverySupplier" />
        <TextField label="delivery_to" source="deliveryTo" />
        <TextField label="delivery_to_type" source="deliveryToType" />
        <TextField
          label="description_of_content"
          source="descriptionOfContent"
        />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="incoterm" source="incoterm" />
        <TextField label="_liked_by" source="likedBy" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="pallets" source="pallets" />
        <TextField label="parcel_template" source="parcelTemplate" />
        <TextField label="pickup" source="pickup" />
        <TextField label="pickup_address" source="pickupAddress" />
        <TextField label="pickup_address_name" source="pickupAddressName" />
        <TextField label="pickup_company" source="pickupCompany" />
        <TextField label="pickup_contact" source="pickupContact" />
        <TextField label="pickup_contact_email" source="pickupContactEmail" />
        <TextField label="pickup_contact_name" source="pickupContactName" />
        <TextField label="pickup_contact_person" source="pickupContactPerson" />
        <TextField label="pickup_customer" source="pickupCustomer" />
        <TextField label="pickup_date" source="pickupDate" />
        <TextField label="pickup_from" source="pickupFrom" />
        <TextField label="pickup_from_type" source="pickupFromType" />
        <TextField label="pickup_supplier" source="pickupSupplier" />
        <TextField label="pickup_to" source="pickupTo" />
        <TextField label="pickup_type" source="pickupType" />
        <TextField label="service_provider" source="serviceProvider" />
        <TextField label="shipment_amount" source="shipmentAmount" />
        <TextField label="shipment_id" source="shipmentId" />
        <TextField label="shipment_type" source="shipmentType" />
        <TextField label="status" source="status" />
        <TextField label="tracking_status" source="trackingStatus" />
        <TextField label="tracking_status_info" source="trackingStatusInfo" />
        <TextField label="tracking_url" source="trackingUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value_of_goods" source="valueOfGoods" />
      </SimpleShowLayout>
    </Show>
  );
};
