import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, validate } from "class-validator";
import express from "express";

import { db } from "../../config/datasource";
import { User } from "../../entities/User";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  username: string

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  password: string
}

const createUser = async (username: string, email: string, password: string): Promise<User> => {
  const userRepository = db.getRepository(User)

  const user = new User()
  user.username = username
  user.email = email
  user.password = password

  return await userRepository.save(user)
}

const authRoutes = express.Router()

export const register = async (req, res) => {
  try {
    const createUserDto = new CreateUserDto()
    createUserDto.username = req.body.username
    createUserDto.email = req.body.email
    createUserDto.password = req.body.password

    const errors = await validate(createUserDto)

    if (errors.length > 0) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.map(error => ({
          field: error.property,
          constraints: error.constraints
        }))
      })
    }

    // const { name, email, password } = req.body
    const user = await createUser(createUserDto.username, createUserDto.email, createUserDto.password)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

authRoutes.post("/register", register)

export default authRoutes