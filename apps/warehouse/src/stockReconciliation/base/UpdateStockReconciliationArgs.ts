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
import { StockReconciliationWhereUniqueInput } from "./StockReconciliationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StockReconciliationUpdateInput } from "./StockReconciliationUpdateInput";

@ArgsType()
class UpdateStockReconciliationArgs {
  @ApiProperty({
    required: true,
    type: () => StockReconciliationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StockReconciliationWhereUniqueInput)
  @Field(() => StockReconciliationWhereUniqueInput, { nullable: false })
  where!: StockReconciliationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StockReconciliationUpdateInput,
  })
  @ValidateNested()
  @Type(() => StockReconciliationUpdateInput)
  @Field(() => StockReconciliationUpdateInput, { nullable: false })
  data!: StockReconciliationUpdateInput;
}

export { UpdateStockReconciliationArgs as UpdateStockReconciliationArgs };