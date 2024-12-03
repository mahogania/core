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
import { SerialNoWhereInput } from "./SerialNoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SerialNoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SerialNoWhereInput,
  })
  @ValidateNested()
  @Type(() => SerialNoWhereInput)
  @IsOptional()
  @Field(() => SerialNoWhereInput, {
    nullable: true,
  })
  every?: SerialNoWhereInput;

  @ApiProperty({
    required: false,
    type: () => SerialNoWhereInput,
  })
  @ValidateNested()
  @Type(() => SerialNoWhereInput)
  @IsOptional()
  @Field(() => SerialNoWhereInput, {
    nullable: true,
  })
  some?: SerialNoWhereInput;

  @ApiProperty({
    required: false,
    type: () => SerialNoWhereInput,
  })
  @ValidateNested()
  @Type(() => SerialNoWhereInput)
  @IsOptional()
  @Field(() => SerialNoWhereInput, {
    nullable: true,
  })
  none?: SerialNoWhereInput;
}
export { SerialNoListRelationFilter as SerialNoListRelationFilter };
