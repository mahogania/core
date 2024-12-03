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
import { DeliveryNoteItemWhereInput } from "./DeliveryNoteItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DeliveryNoteItemOrderByInput } from "./DeliveryNoteItemOrderByInput";

@ArgsType()
class DeliveryNoteItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DeliveryNoteItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DeliveryNoteItemWhereInput, { nullable: true })
  @Type(() => DeliveryNoteItemWhereInput)
  where?: DeliveryNoteItemWhereInput;

  @ApiProperty({
    required: false,
    type: [DeliveryNoteItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DeliveryNoteItemOrderByInput], { nullable: true })
  @Type(() => DeliveryNoteItemOrderByInput)
  orderBy?: Array<DeliveryNoteItemOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DeliveryNoteItemFindManyArgs as DeliveryNoteItemFindManyArgs };
