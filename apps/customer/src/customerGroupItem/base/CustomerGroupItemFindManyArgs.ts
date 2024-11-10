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
import { CustomerGroupItemWhereInput } from "./CustomerGroupItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomerGroupItemOrderByInput } from "./CustomerGroupItemOrderByInput";

@ArgsType()
class CustomerGroupItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomerGroupItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomerGroupItemWhereInput, { nullable: true })
  @Type(() => CustomerGroupItemWhereInput)
  where?: CustomerGroupItemWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomerGroupItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomerGroupItemOrderByInput], { nullable: true })
  @Type(() => CustomerGroupItemOrderByInput)
  orderBy?: Array<CustomerGroupItemOrderByInput>;

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

export { CustomerGroupItemFindManyArgs as CustomerGroupItemFindManyArgs };
