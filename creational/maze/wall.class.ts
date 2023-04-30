import MapSite from './mapsite.class';

export default class Wall extends MapSite {
  constructor() {
    super();
  }

  override Enter(): number {
    return 0;
  }
}
