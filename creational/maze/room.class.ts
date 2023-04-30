import { Direction } from './interface';
import MapSite from './mapsite.class';

export default class Room extends MapSite {
  private _roomNumber: number = 0;
  private _sides: Map<Direction, MapSite> = new Map();

  constructor(roomNumber: number) {
    super();
    this._roomNumber = roomNumber;
  }

  override Enter(): number {
    return 1;
  }

  public setSide(direction: Direction, mapSite: MapSite) {
    if (this._sides.size === 4) {
      throw new Error('Cannot not add more than 4 sides per room');
    }
    this._sides.set(direction, mapSite);
  }

  public getSide(direction: Direction): MapSite | undefined {
    return this._sides.get(direction);
  }

  public set setRoomNumber(v: number) {
    this._roomNumber = v;
  }

  public get getRoomNumber(): number {
    return this._roomNumber;
  }
}
