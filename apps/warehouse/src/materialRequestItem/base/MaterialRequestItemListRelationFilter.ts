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
import { MaterialRequestItemWhereInput } from "./MaterialRequestItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MaterialRequestItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MaterialRequestItemWhereInput,
  })
  @ValidateNested()
  @Type(() => MaterialRequestItemWhereInput)
  @IsOptional()
  @Field(() => MaterialRequestItemWhereInput, {
    nullable: true,
  })
  every?: MaterialRequestItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaterialRequestItemWhereInput,
  })
  @ValidateNested()
  @Type(() => MaterialRequestItemWhereInput)
  @IsOptional()
  @Field(() => MaterialRequestItemWhereInput, {
    nullable: true,
  })
  some?: MaterialRequestItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaterialRequestItemWhereInput,
  })
  @ValidateNested()
  @Type(() => MaterialRequestItemWhereInput)
  @IsOptional()
  @Field(() => MaterialRequestItemWhereInput, {
    nullable: true,
  })
  none?: MaterialRequestItemWhereInput;
}
export { MaterialRequestItemListRelationFilter as MaterialRequestItemListRelationFilter };