import { Observable } from 'rxjs';

const obs$ = Observable.interval(1000).take(3);
obs$.subscribe(console.log);