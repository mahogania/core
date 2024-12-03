import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "shipment",
      "shipmentdeliverynote",
      "shipmentparcel",
      "shipmentparceltemplate",
      "shippingrule",
      "shippingrulecondition",
      "shippingrulecountry"
    ],
    protoPath: [
      "src/shipment/shipment.proto",
      "src/shipmentdeliverynote/shipmentdeliverynote.proto",
      "src/shipmentparcel/shipmentparcel.proto",
      "src/shipmentparceltemplate/shipmentparceltemplate.proto",
      "src/shippingrule/shippingrule.proto",
      "src/shippingrulecondition/shippingrulecondition.proto",
      "src/shippingrulecountry/shippingrulecountry.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
