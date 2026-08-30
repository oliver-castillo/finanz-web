import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Token } from '../util/token';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<any> => {
  // Normalize path: try to parse absolute or relative URLs
  let url: string = req.url;

  // If request targets any /auth/* endpoint, do not modify headers
  if (url?.includes('/auth/')) {
    return next(req);
  }

  // For other requests, read access token from localStorage and attach Authorization header if present
  const accessToken: string | null = localStorage.getItem(Token.ACCESS_TOKEN);
  if (!accessToken) {
    return next(req);
  }

  const authReq: HttpRequest<any> = req.clone({
    setHeaders: { Authorization: `Bearer ${accessToken}` },
  });

  return next(authReq);
};
