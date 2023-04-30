import MapSite from './mapsite.class';
import Room from './room.class';

export default class Door extends MapSite {
  protected _room1: Room;
  protected _room2: Room;
  protected _isOpen: boolean;
  constructor(room1: Room, room2: Room) {
    super();
    this._room1 = room1;
    this._room2 = room2;
    this._isOpen = false;
  }

  public set setIsOpen(v: boolean) {
    this._isOpen = v;
  }

  public get getIsOpen(): boolean {
    return this._isOpen;
  }

  OtherSideFrom(room: Room): number {
    return room.getRoomNumber;
  }

  override Enter(): number {
    return 1;
  }
}
