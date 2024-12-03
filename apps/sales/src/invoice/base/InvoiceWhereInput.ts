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
import { DealWhereUniqueInput } from "../../deal/base/DealWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class InvoiceWhereInput {
  @ApiProperty({
    required: false,
    type: () => DealWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DealWhereUniqueInput)
  @IsOptional()
  @Field(() => DealWhereUniqueInput, {
    nullable: true,
  })
  deal?: DealWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { InvoiceWhereInput as InvoiceWhereInput };
