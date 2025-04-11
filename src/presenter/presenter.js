import Filters from '../view/filters';
import CreatingForm from '../view/creating-form';
import EditingForm from '../view/editing-form';
import RoutePointList from '../view/route-point-list';
import RoutePoint from '../view/route-point';
import Sort from '../view/sort';
import { render } from '../render.js';

const MAX_ROUTE_POINT_COUNT = 3;

export default class Presenter {
  RoutePointListPart = new RoutePointList();

  constructor() {
    this.tripEvents = document.querySelector('.trip-events');
    this.tripControlFilters = document.querySelector('.trip-controls__filters');
  }

  init() {
    render(new Filters(), this.tripControlFilters);
    render(new Sort(), this.tripEvents);
    render(this.RoutePointListPart, this.tripEvents);
    render(new EditingForm(), this.RoutePointListPart.getElement());

    for (let i = 0; i < MAX_ROUTE_POINT_COUNT; i++) {
      render(new RoutePoint(), this.RoutePointListPart.getElement());
    }

    render(new CreatingForm(), this.RoutePointListPart.getElement());
  }
}
