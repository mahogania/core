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
import { AssetCapitalizationAssetItemWhereUniqueInput } from "./AssetCapitalizationAssetItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AssetCapitalizationAssetItemUpdateInput } from "./AssetCapitalizationAssetItemUpdateInput";

@ArgsType()
class UpdateAssetCapitalizationAssetItemArgs {
  @ApiProperty({
    required: true,
    type: () => AssetCapitalizationAssetItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssetCapitalizationAssetItemWhereUniqueInput)
  @Field(() => AssetCapitalizationAssetItemWhereUniqueInput, {
    nullable: false,
  })
  where!: AssetCapitalizationAssetItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AssetCapitalizationAssetItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => AssetCapitalizationAssetItemUpdateInput)
  @Field(() => AssetCapitalizationAssetItemUpdateInput, { nullable: false })
  data!: AssetCapitalizationAssetItemUpdateInput;
}

export { UpdateAssetCapitalizationAssetItemArgs as UpdateAssetCapitalizationAssetItemArgs };
