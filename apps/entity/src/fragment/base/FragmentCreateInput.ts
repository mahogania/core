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
import { AttributeCreateNestedManyWithoutFragmentsInput } from "./AttributeCreateNestedManyWithoutFragmentsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { TraitWhereUniqueInput } from "../../trait/base/TraitWhereUniqueInput";
import { ViewCreateNestedManyWithoutFragmentsInput } from "./ViewCreateNestedManyWithoutFragmentsInput";

@InputType()
class FragmentCreateInput {
  @ApiProperty({
    required: false,
    type: () => AttributeCreateNestedManyWithoutFragmentsInput,
  })
  @ValidateNested()
  @Type(() => AttributeCreateNestedManyWithoutFragmentsInput)
  @IsOptional()
  @Field(() => AttributeCreateNestedManyWithoutFragmentsInput, {
    nullable: true,
  })
  attributes?: AttributeCreateNestedManyWithoutFragmentsInput;

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
    type: () => TraitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TraitWhereUniqueInput)
  @IsOptional()
  @Field(() => TraitWhereUniqueInput, {
    nullable: true,
  })
  trait?: TraitWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ViewCreateNestedManyWithoutFragmentsInput,
  })
  @ValidateNested()
  @Type(() => ViewCreateNestedManyWithoutFragmentsInput)
  @IsOptional()
  @Field(() => ViewCreateNestedManyWithoutFragmentsInput, {
    nullable: true,
  })
  views?: ViewCreateNestedManyWithoutFragmentsInput;
}

export { FragmentCreateInput as FragmentCreateInput };