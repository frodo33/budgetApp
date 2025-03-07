import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class ChangePasswordDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  password: string

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  newPassword: string
}