import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import User from './User';

@Entity()
export class ListingItem {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;

  @Column()
  have: string;

  @Column()
  what: string;

  @ManyToOne(type => User);
}
