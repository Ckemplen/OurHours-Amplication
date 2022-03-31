/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmployeeCreateNestedManyWithoutBusinessesInput } from "./EmployeeCreateNestedManyWithoutBusinessesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class BusinessCreateInput {
  @ApiProperty({
    required: false,
    type: () => EmployeeCreateNestedManyWithoutBusinessesInput,
  })
  @ValidateNested()
  @Type(() => EmployeeCreateNestedManyWithoutBusinessesInput)
  @IsOptional()
  @Field(() => EmployeeCreateNestedManyWithoutBusinessesInput, {
    nullable: true,
  })
  employees?: EmployeeCreateNestedManyWithoutBusinessesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;
}
export { BusinessCreateInput };
