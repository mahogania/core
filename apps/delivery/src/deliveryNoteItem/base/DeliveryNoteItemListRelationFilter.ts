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
import { DeliveryNoteItemWhereInput } from "./DeliveryNoteItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DeliveryNoteItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DeliveryNoteItemWhereInput,
  })
  @ValidateNested()
  @Type(() => DeliveryNoteItemWhereInput)
  @IsOptional()
  @Field(() => DeliveryNoteItemWhereInput, {
    nullable: true,
  })
  every?: DeliveryNoteItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => DeliveryNoteItemWhereInput,
  })
  @ValidateNested()
  @Type(() => DeliveryNoteItemWhereInput)
  @IsOptional()
  @Field(() => DeliveryNoteItemWhereInput, {
    nullable: true,
  })
  some?: DeliveryNoteItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => DeliveryNoteItemWhereInput,
  })
  @ValidateNested()
  @Type(() => DeliveryNoteItemWhereInput)
  @IsOptional()
  @Field(() => DeliveryNoteItemWhereInput, {
    nullable: true,
  })
  none?: DeliveryNoteItemWhereInput;
}
export { DeliveryNoteItemListRelationFilter as DeliveryNoteItemListRelationFilter };