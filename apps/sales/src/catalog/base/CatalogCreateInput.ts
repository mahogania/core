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
import { ConfigurationCreateNestedManyWithoutCatalogsInput } from "./ConfigurationCreateNestedManyWithoutCatalogsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";

@InputType()
class CatalogCreateInput {
  @ApiProperty({
    required: false,
    type: () => ConfigurationCreateNestedManyWithoutCatalogsInput,
  })
  @ValidateNested()
  @Type(() => ConfigurationCreateNestedManyWithoutCatalogsInput)
  @IsOptional()
  @Field(() => ConfigurationCreateNestedManyWithoutCatalogsInput, {
    nullable: true,
  })
  configurations?: ConfigurationCreateNestedManyWithoutCatalogsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  displayName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => UnitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UnitWhereUniqueInput)
  @IsOptional()
  @Field(() => UnitWhereUniqueInput, {
    nullable: true,
  })
  unit?: UnitWhereUniqueInput | null;
}

export { CatalogCreateInput as CatalogCreateInput };
