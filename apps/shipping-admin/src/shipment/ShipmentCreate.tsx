import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ShipmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="awb_number" source="awbNumber" />
        <TextInput label="carrier" source="carrier" />
        <TextInput label="carrier_service" source="carrierService" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput
          label="delivery_address"
          multiline
          source="deliveryAddress"
        />
        <TextInput label="delivery_address_name" source="deliveryAddressName" />
        <TextInput label="delivery_company" source="deliveryCompany" />
        <TextInput
          label="delivery_contact"
          multiline
          source="deliveryContact"
        />
        <TextInput
          label="delivery_contact_email"
          source="deliveryContactEmail"
          type="email"
        />
        <TextInput label="delivery_contact_name" source="deliveryContactName" />
        <TextInput label="delivery_customer" source="deliveryCustomer" />
        <TextInput label="delivery_supplier" source="deliverySupplier" />
        <TextInput label="delivery_to" source="deliveryTo" />
        <TextInput label="delivery_to_type" source="deliveryToType" />
        <TextInput
          label="description_of_content"
          multiline
          source="descriptionOfContent"
        />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="incoterm" source="incoterm" />
        <TextInput label="_liked_by" multiline source="likedBy" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="pallets" source="pallets" />
        <TextInput label="parcel_template" source="parcelTemplate" />
        <TextInput label="pickup" source="pickup" />
        <TextInput label="pickup_address" multiline source="pickupAddress" />
        <TextInput label="pickup_address_name" source="pickupAddressName" />
        <TextInput label="pickup_company" source="pickupCompany" />
        <TextInput label="pickup_contact" multiline source="pickupContact" />
        <TextInput
          label="pickup_contact_email"
          source="pickupContactEmail"
          type="email"
        />
        <TextInput label="pickup_contact_name" source="pickupContactName" />
        <TextInput label="pickup_contact_person" source="pickupContactPerson" />
        <TextInput label="pickup_customer" source="pickupCustomer" />
        <DateTimeInput label="pickup_date" source="pickupDate" />
        <DateTimeInput label="pickup_from" source="pickupFrom" />
        <TextInput label="pickup_from_type" source="pickupFromType" />
        <TextInput label="pickup_supplier" source="pickupSupplier" />
        <DateTimeInput label="pickup_to" source="pickupTo" />
        <TextInput label="pickup_type" source="pickupType" />
        <TextInput label="service_provider" source="serviceProvider" />
        <NumberInput label="shipment_amount" source="shipmentAmount" />
        <TextInput label="shipment_id" source="shipmentId" />
        <TextInput label="shipment_type" source="shipmentType" />
        <TextInput label="status" source="status" />
        <TextInput label="tracking_status" source="trackingStatus" />
        <TextInput label="tracking_status_info" source="trackingStatusInfo" />
        <TextInput label="tracking_url" multiline source="trackingUrl" />
        <NumberInput label="value_of_goods" source="valueOfGoods" />
      </SimpleForm>
    </Create>
  );
};
