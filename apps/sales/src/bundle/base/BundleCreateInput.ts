/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConfigurationWhereUniqueInput } from "../../configuration/base/ConfigurationWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Configuration } from "../../configuration/base/Configuration";
import { FeatureCreateNestedManyWithoutBundlesInput } from "./FeatureCreateNestedManyWithoutBundlesInput";

@InputType()
class BundleCreateInput {
  @ApiProperty({
    required: true,
    type: () => ConfigurationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConfigurationWhereUniqueInput)
  @Field(() => ConfigurationWhereUniqueInput)
  Configuration!: ConfigurationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => FeatureCreateNestedManyWithoutBundlesInput,
  })
  @ValidateNested()
  @Type(() => FeatureCreateNestedManyWithoutBundlesInput)
  @IsOptional()
  @Field(() => FeatureCreateNestedManyWithoutBundlesInput, {
    nullable: true,
  })
  features?: FeatureCreateNestedManyWithoutBundlesInput;
}

export { BundleCreateInput as BundleCreateInput };