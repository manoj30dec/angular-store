import { HttpInterceptorFn } from '@angular/common/http';

export const headerinfoInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
