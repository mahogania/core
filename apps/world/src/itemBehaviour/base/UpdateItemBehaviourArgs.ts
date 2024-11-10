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
import { ItemBehaviourWhereUniqueInput } from "./ItemBehaviourWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ItemBehaviourUpdateInput } from "./ItemBehaviourUpdateInput";

@ArgsType()
class UpdateItemBehaviourArgs {
  @ApiProperty({
    required: true,
    type: () => ItemBehaviourWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemBehaviourWhereUniqueInput)
  @Field(() => ItemBehaviourWhereUniqueInput, { nullable: false })
  where!: ItemBehaviourWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ItemBehaviourUpdateInput,
  })
  @ValidateNested()
  @Type(() => ItemBehaviourUpdateInput)
  @Field(() => ItemBehaviourUpdateInput, { nullable: false })
  data!: ItemBehaviourUpdateInput;
}

export { UpdateItemBehaviourArgs as UpdateItemBehaviourArgs };
