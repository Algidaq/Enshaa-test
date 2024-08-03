import { useCallback, useState } from "react";

export const useBusy = (value = false) => {
  const [busy, setBusy] = useState(value);
  const hideLoadingIndicator = useCallback(() => setBusy(false), []);
  const showLoadingIndicator = useCallback(() => setBusy(true), []);
  return [busy, { hideLoadingIndicator, showLoadingIndicator }] as const;
};
