/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DiscountWhereUniqueInput } from "../../discount/base/DiscountWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DiscountUpdateManyWithoutCurrenciesInput {
  @Field(() => [DiscountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DiscountWhereUniqueInput],
  })
  connect?: Array<DiscountWhereUniqueInput>;

  @Field(() => [DiscountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DiscountWhereUniqueInput],
  })
  disconnect?: Array<DiscountWhereUniqueInput>;

  @Field(() => [DiscountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DiscountWhereUniqueInput],
  })
  set?: Array<DiscountWhereUniqueInput>;
}

export { DiscountUpdateManyWithoutCurrenciesInput as DiscountUpdateManyWithoutCurrenciesInput };
