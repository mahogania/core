/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConfigurationCreateInput } from "./ConfigurationCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateConfigurationArgs {
  @ApiProperty({
    required: true,
    type: () => ConfigurationCreateInput,
  })
  @ValidateNested()
  @Type(() => ConfigurationCreateInput)
  @Field(() => ConfigurationCreateInput, { nullable: false })
  data!: ConfigurationCreateInput;
}

export { CreateConfigurationArgs as CreateConfigurationArgs };
