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
import { BundleWhereUniqueInput } from "../../bundle/base/BundleWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CatalogWhereUniqueInput } from "../../catalog/base/CatalogWhereUniqueInput";
import { ItemCreateNestedManyWithoutConfigurationsInput } from "./ItemCreateNestedManyWithoutConfigurationsInput";
import { PipelineWhereUniqueInput } from "../../pipeline/base/PipelineWhereUniqueInput";

@InputType()
class ConfigurationCreateInput {
  @ApiProperty({
    required: true,
    type: () => BundleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BundleWhereUniqueInput)
  @Field(() => BundleWhereUniqueInput)
  bundle!: BundleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CatalogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CatalogWhereUniqueInput)
  @IsOptional()
  @Field(() => CatalogWhereUniqueInput, {
    nullable: true,
  })
  catalog?: CatalogWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ItemCreateNestedManyWithoutConfigurationsInput,
  })
  @ValidateNested()
  @Type(() => ItemCreateNestedManyWithoutConfigurationsInput)
  @IsOptional()
  @Field(() => ItemCreateNestedManyWithoutConfigurationsInput, {
    nullable: true,
  })
  items?: ItemCreateNestedManyWithoutConfigurationsInput;

  @ApiProperty({
    required: true,
    type: () => PipelineWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PipelineWhereUniqueInput)
  @Field(() => PipelineWhereUniqueInput)
  pipeline!: PipelineWhereUniqueInput;
}

export { ConfigurationCreateInput as ConfigurationCreateInput };
