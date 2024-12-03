import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "clearancedeclaration",
      "tbclrededpdls",
      "tbclrededmdlstsz",
      "tbclrededvlutcomn",
      "tbclrededvlutpdls",
      "tbclrededcntr",
      "tbclrededco",
      "tbclrededmg",
      "tbclrededprcdclr",
      "tbclrededprcdclrpdls",
      "tbclrededrwms",
      "tbclrededtax",
      "tbclrededvhcl",
      "tbclrededrimexprngpdls"
    ],
    protoPath: [
      "src/clearancedeclaration/clearancedeclaration.proto",
      "src/tbclrededpdls/tbclrededpdls.proto",
      "src/tbclrededmdlstsz/tbclrededmdlstsz.proto",
      "src/tbclrededvlutcomn/tbclrededvlutcomn.proto",
      "src/tbclrededvlutpdls/tbclrededvlutpdls.proto",
      "src/tbclrededcntr/tbclrededcntr.proto",
      "src/tbclrededco/tbclrededco.proto",
      "src/tbclrededmg/tbclrededmg.proto",
      "src/tbclrededprcdclr/tbclrededprcdclr.proto",
      "src/tbclrededprcdclrpdls/tbclrededprcdclrpdls.proto",
      "src/tbclrededrwms/tbclrededrwms.proto",
      "src/tbclrededtax/tbclrededtax.proto",
      "src/tbclrededvhcl/tbclrededvhcl.proto",
      "src/tbclrededrimexprngpdls/tbclrededrimexprngpdls.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
