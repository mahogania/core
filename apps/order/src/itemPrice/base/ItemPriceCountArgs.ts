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
import { ItemPriceWhereInput } from "./ItemPriceWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ItemPriceCountArgs {
  @ApiProperty({
    required: false,
    type: () => ItemPriceWhereInput,
  })
  @Field(() => ItemPriceWhereInput, { nullable: true })
  @Type(() => ItemPriceWhereInput)
  where?: ItemPriceWhereInput;
}

export { ItemPriceCountArgs as ItemPriceCountArgs };