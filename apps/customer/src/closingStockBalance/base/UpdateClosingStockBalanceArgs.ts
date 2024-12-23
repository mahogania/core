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
import { ClosingStockBalanceWhereUniqueInput } from "./ClosingStockBalanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ClosingStockBalanceUpdateInput } from "./ClosingStockBalanceUpdateInput";

@ArgsType()
class UpdateClosingStockBalanceArgs {
  @ApiProperty({
    required: true,
    type: () => ClosingStockBalanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClosingStockBalanceWhereUniqueInput)
  @Field(() => ClosingStockBalanceWhereUniqueInput, { nullable: false })
  where!: ClosingStockBalanceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ClosingStockBalanceUpdateInput,
  })
  @ValidateNested()
  @Type(() => ClosingStockBalanceUpdateInput)
  @Field(() => ClosingStockBalanceUpdateInput, { nullable: false })
  data!: ClosingStockBalanceUpdateInput;
}

export { UpdateClosingStockBalanceArgs as UpdateClosingStockBalanceArgs };
