declare module 'node-ruuvitag' {
  import EventEmitter from 'events';

  export interface IRuuviMeasurement {
    url: string;
    rssi: number;
    humidity: number;
    temperature: number;
    pressure: number;
    accelerationX: number;
    accelerationY: number;
    accelerationZ: number;
  }

  export interface IRuuviMeasurementV4 extends IRuuviMeasurement {
    dataFormat: 4;
    eddystoneId: number;
  }

  export interface IRuuviMeasurementV5 extends IRuuviMeasurement {
    dataFormat: 5;
    txPower: number;
    movementCounter: number;
    measurementSequenceNumber: number;
    mac: string;
  }

  export type RuuviDataBase = {
    url: string;
    rssi: number;
    humidity: number;
    temperature: number;
    pressure: number;
    accelerationX: number;
    accelerationY: number;
    accelerationZ: number;
  };

  export type RuuviDataV4 = {
    dataFormat: 4;
    eddystoneId: number;
  };

  export type RuuviDataV5 = {
    dataFormat: 5;
    txPower: number;
    movementCounter: number;
    measurementSequenceNumber: number;
    mac: string;
  };

  export type RuuviMeasurement = RuuviDataBase & RuuviDataV5;

  class RuuviTag extends EventEmitter {
    readonly id: string;
    readonly address: string;
    readonly addressType: string;
    readonly connectable: boolean;

    on<T = IRuuviMeasurementV5>(ev: 'updated', fn: (m: T) => void): void;
  }

  export type RuuviEvents = 'found' | 'updated';

  export class Ruuvi extends EventEmitter {
    readonly scanning: boolean;
    readonly listenerAttached: boolean;

    findTags(): Promise<RuuviTag[]>;
    start(): void;
    stop(): void;

    on(ev: 'found', fn: (tag: RuuviTag) => void): void;
    on(ev: 'warning', fn: (msg: string) => void): void;
  }

  type DefaultRuuvi = InstanceType<typeof Ruuvi>;

  const ruuvi: DefaultRuuvi;

  export default ruuvi;
}
