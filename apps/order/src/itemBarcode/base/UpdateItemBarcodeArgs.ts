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
import { ItemBarcodeWhereUniqueInput } from "./ItemBarcodeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ItemBarcodeUpdateInput } from "./ItemBarcodeUpdateInput";

@ArgsType()
class UpdateItemBarcodeArgs {
  @ApiProperty({
    required: true,
    type: () => ItemBarcodeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemBarcodeWhereUniqueInput)
  @Field(() => ItemBarcodeWhereUniqueInput, { nullable: false })
  where!: ItemBarcodeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ItemBarcodeUpdateInput,
  })
  @ValidateNested()
  @Type(() => ItemBarcodeUpdateInput)
  @Field(() => ItemBarcodeUpdateInput, { nullable: false })
  data!: ItemBarcodeUpdateInput;
}

export { UpdateItemBarcodeArgs as UpdateItemBarcodeArgs };
