import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const AsyncWrapper = ({ fallback, errorFallback, children }) => (
  <ErrorBoundary fallback={errorFallback}>
    <Suspense fallback={fallback}>{children}</Suspense>
  </ErrorBoundary>
);
