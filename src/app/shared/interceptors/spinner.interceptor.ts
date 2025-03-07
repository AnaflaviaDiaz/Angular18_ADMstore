import { inject } from '@angular/core';
import { SpinnerService } from '@shared/services/spinner.service';
import { finalize } from 'rxjs';
import { HttpInterceptorFn } from '@angular/common/http';

// ***interceptor nuevo formato------------------

export const SpinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const spinnerSrv = inject(SpinnerService);
  spinnerSrv.show();
  return next(req).pipe(finalize(() => spinnerSrv.hide()));
};

// **interceptor antiguo-----------------------

// @Injectable({ providedIn: 'root' })
// export class SpinnerInterceptor implements HttpInterceptor {
//   private readonly _spinnerService = inject(SpinnerService);

//   intercept(
//     request: HttpRequest<unknown>,
//     next: HttpHandler
//   ): Observable<HttpEvent<unknown>> {
//     this._spinnerService.show();
//     return next
//       .handle(request)
//       .pipe(finalize(() => this._spinnerService.hide()));
//   }
// }
