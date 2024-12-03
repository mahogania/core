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
import { AssetMovementItemWhereUniqueInput } from "./AssetMovementItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AssetMovementItemUpdateInput } from "./AssetMovementItemUpdateInput";

@ArgsType()
class UpdateAssetMovementItemArgs {
  @ApiProperty({
    required: true,
    type: () => AssetMovementItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssetMovementItemWhereUniqueInput)
  @Field(() => AssetMovementItemWhereUniqueInput, { nullable: false })
  where!: AssetMovementItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AssetMovementItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => AssetMovementItemUpdateInput)
  @Field(() => AssetMovementItemUpdateInput, { nullable: false })
  data!: AssetMovementItemUpdateInput;
}

export { UpdateAssetMovementItemArgs as UpdateAssetMovementItemArgs };
