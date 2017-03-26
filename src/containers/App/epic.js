import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/concat'
import { windowResize } from './actions'

const epic = () =>
  Observable.concat(

    // Emit resize action on app startup
    Observable.of(windowResize(window.innerWidth)),

    // Every time window resizes
    Observable.fromEvent(window, 'resize')

      // wait for 200ms
      .debounceTime(200)

      // then emit resize action
      .map(() => windowResize(window.innerWidth))
  )

export default epic