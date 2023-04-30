import Room from './room.class';

export default class Maze {
  protected _rooms: Map<number, Room> = new Map();
  constructor() {}

  public AddRoom(v: Room) {
    this._rooms.set(v.getRoomNumber, v);
  }

  public GetRoom(v: number): Room | undefined {
    return this._rooms.get(v);
  }
}
