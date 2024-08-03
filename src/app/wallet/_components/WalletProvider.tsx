"use client";
import React, { useEffect, useState } from "react";
import { WalletRes, WalletService } from "@/services";
import { LoadingIndicator } from "@/components";
type WalletState = {
  stateEnum: "idel" | "busy" | "error" | "empty" | "success";
  data: WalletRes | null;
  error?: string | undefined;
};

const kInitialState: WalletState = {
  stateEnum: "busy",
  data: null,
};

type IWalletCtx = {
  state: WalletState;
  actions: {
    loadWalletDetails: () => Promise<void>;
  };
};

const WalletCtx = React.createContext<IWalletCtx | null>(null);

export const useWalletCtx = () => {
  const value = React.useContext(WalletCtx);
  return value!;
};

export const WalletProvider: React.FC<React.PropsWithChildren<{}>> = (
  props
) => {
  const [state, setState] = useState<WalletState>(kInitialState);
  const updateState = React.useCallback((state: Partial<WalletState>): void => {
    setState((prev) => ({ ...prev, ...state }));
  }, []);

  const loadWalletDetails = React.useCallback(async () => {
    updateState({ stateEnum: "busy" });
    const res = await WalletService.getWalletInformation();
    if (res.error !== undefined) {
      updateState({ stateEnum: "error" });
      return;
    }
    updateState({ stateEnum: "success", data: res.data });
  }, [updateState]);

  useEffect(() => {
    loadWalletDetails().then();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WalletCtx.Provider
      value={{ state: state, actions: { loadWalletDetails } }}
    >
      {state.stateEnum === "busy" && <LoadingIndicator />}
      {state.stateEnum === "success" && props.children}
      {state.stateEnum === "error" && <WalletErrorScreen />}
    </WalletCtx.Provider>
  );
};

const WalletErrorScreen: React.FC<{}> = () => {
  const { actions } = useWalletCtx();
  return (
    <div className="w-full ">
      <div className="flex flex-col justify-center items-center h-full min-h-[300px]">
        <p className="body_large text-body">حدث خطا ما الرجا إعادة المحاولة</p>
        <button
          className="px-8 py-4 mt-4 rounded-[4px] bg-primary-500 body_medium max-h-12 text-netural-100"
          onClick={actions.loadWalletDetails}
        >
          إعادة المحاولة
        </button>
      </div>
    </div>
  );
};
