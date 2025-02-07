import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user_invalid_tokens" })
export class UserInvalidToken {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  accessToken: string

  @Column()
  userId: number

  @Column({ type: "timestamp" })
  expiresAt: Date

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public createdAt: Date
}