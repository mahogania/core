import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "clrededcomn",
      "clrededpdls",
      "clrededmdlstsz",
      "clrededvlutcomn",
      "clrededvlutpdl",
      "clrededcntr",
      "clrededco",
      "clrededmg",
      "clrededprcdclr",
      "clrededprcdclrpdl",
      "clrededrwm",
      "clrededtax",
      "clrededvhcl",
      "clrededrimexprngpdl"
    ],
    protoPath: [
      "src/clrededcomn/clrededcomn.proto",
      "src/clrededpdls/clrededpdls.proto",
      "src/clrededmdlstsz/clrededmdlstsz.proto",
      "src/clrededvlutcomn/clrededvlutcomn.proto",
      "src/clrededvlutpdl/clrededvlutpdl.proto",
      "src/clrededcntr/clrededcntr.proto",
      "src/clrededco/clrededco.proto",
      "src/clrededmg/clrededmg.proto",
      "src/clrededprcdclr/clrededprcdclr.proto",
      "src/clrededprcdclrpdl/clrededprcdclrpdl.proto",
      "src/clrededrwm/clrededrwm.proto",
      "src/clrededtax/clrededtax.proto",
      "src/clrededvhcl/clrededvhcl.proto",
      "src/clrededrimexprngpdl/clrededrimexprngpdl.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
