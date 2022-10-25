import { useMatchBreakpoints } from "@digi.swap/uikit";

const useIsMobile = () => {
  const { isXl, isLg, isXxl } = useMatchBreakpoints();
  const isMobile = !isLg && !isXl && !isXxl;
  return isMobile;
};

export default useIsMobile;
