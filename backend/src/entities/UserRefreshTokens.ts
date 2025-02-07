import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from "./User";

@Entity({ name: "user_refresh_tokens" })
export class UserRefreshToken {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  refreshToken: string

  @ManyToOne(() => User, (user) => user.refreshTokens, { onDelete: "CASCADE" })
  user: User

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public createdAt: Date
}