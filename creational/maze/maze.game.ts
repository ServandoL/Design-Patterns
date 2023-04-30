import Door from './door.class';
import { Direction } from './interface';
import Maze from './maze.class';
import Room from './room.class';
import Wall from './wall.class';

export default class MazeGame {
  constructor() {}

  // not scalable or flexible - hard coded maze layout
  // Have to change the code to make different mazes or change rooms

  CreateMaze() {
    const aMaze: Maze = new Maze();
    const r1 = new Room(1);
    const r2 = new Room(2);
    const theDoor = new Door(r1, r2);

    aMaze.AddRoom(r1);
    aMaze.AddRoom(r2);

    r1.setSide(Direction.North, new Wall());
    r1.setSide(Direction.East, theDoor);
    r1.setSide(Direction.South, new Wall());
    r1.setSide(Direction.West, new Wall());

    r2.setSide(Direction.North, new Wall());
    r2.setSide(Direction.East, new Wall());
    r2.setSide(Direction.South, new Wall());
    r2.setSide(Direction.West, theDoor);

    return aMaze;
  }
}
