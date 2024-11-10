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
import { AssetRepairConsumedItemWhereUniqueInput } from "./AssetRepairConsumedItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class AssetRepairConsumedItemFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => AssetRepairConsumedItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssetRepairConsumedItemWhereUniqueInput)
  @Field(() => AssetRepairConsumedItemWhereUniqueInput, { nullable: false })
  where!: AssetRepairConsumedItemWhereUniqueInput;
}

export { AssetRepairConsumedItemFindUniqueArgs as AssetRepairConsumedItemFindUniqueArgs };
