import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "caricagdcshblcntr",
      "caricagdcshbltrlr",
      "caricagdcshblvhcl",
      "caricagdcshbltrnp"
    ],
    protoPath: [
      "src/caricagdcshblcntr/caricagdcshblcntr.proto",
      "src/caricagdcshbltrlr/caricagdcshbltrlr.proto",
      "src/caricagdcshblvhcl/caricagdcshblvhcl.proto",
      "src/caricagdcshbltrnp/caricagdcshbltrnp.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
