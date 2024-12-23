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
import { BomExplosionItemWhereUniqueInput } from "./BomExplosionItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BomExplosionItemUpdateInput } from "./BomExplosionItemUpdateInput";

@ArgsType()
class UpdateBomExplosionItemArgs {
  @ApiProperty({
    required: true,
    type: () => BomExplosionItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BomExplosionItemWhereUniqueInput)
  @Field(() => BomExplosionItemWhereUniqueInput, { nullable: false })
  where!: BomExplosionItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BomExplosionItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => BomExplosionItemUpdateInput)
  @Field(() => BomExplosionItemUpdateInput, { nullable: false })
  data!: BomExplosionItemUpdateInput;
}

export { UpdateBomExplosionItemArgs as UpdateBomExplosionItemArgs };
