import { ExtendedBaseEntity } from '@energyweb/origin-backend-utils';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  DeviceStatus,
  Installation,
  OffTaker,
  Sector,
  StandardCompliance,
} from '../../utils/enums';
import {
  IsEnum,
  IsBoolean,
  IsString,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { IDevice } from '../../models';

@Entity()
export class Device extends ExtendedBaseEntity implements IDevice {
  constructor(device: Partial<Device>) {
    super();
    Object.assign(this, device);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsString()
  drecID: string;

  @Column({ nullable: false, default: DeviceStatus.Active })
  @IsNotEmpty()
  @IsEnum(DeviceStatus)
  status: DeviceStatus;

  @Column()
  organizationId: number;

  @Column()
  @IsString()
  projectName: string;

  @Column()
  @IsString()
  address: string;

  @Column()
  @IsString()
  latitude: string;

  @Column()
  @IsString()
  longitude: string;

  @Column()
  @IsString()
  countryCode: string;

  @Column({ nullable: true })
  @IsNumber()
  zipCode: number;

  @Column()
  @IsString()
  fuelCode: string;

  @Column()
  @IsString()
  deviceTypeCode: string;

  @Column()
  @IsEnum(Installation)
  installationConfiguration: Installation;

  @Column()
  @IsNumber()
  capacity: number;

  @Column()
  @IsString()
  commissioningDate: string;

  @Column()
  @IsBoolean()
  gridInterconnection: boolean;

  @Column()
  @IsEnum(OffTaker)
  offTaker: OffTaker;

  @Column()
  @IsEnum(Sector)
  sector: Sector;

  @Column()
  @IsEnum(StandardCompliance)
  standardCompliance: StandardCompliance;

  @Column({ default: 1000 })
  @IsNumber()
  yieldValue: number;

  @Column('int', { nullable: true, array: true })
  generatorsIds: number[];

  @Column({ nullable: true })
  @IsString()
  labels: string;

  @Column({ nullable: true })
  @IsString()
  impactStory: string;

  @Column({ nullable: true })
  data: string;

  @Column('simple-array', { nullable: true, default: [] })
  images: string[];

  @Column({ type: 'int', nullable: true })
  groupId: number | null;
}
