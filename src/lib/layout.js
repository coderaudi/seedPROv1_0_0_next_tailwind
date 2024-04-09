// library
import { useSnackbar } from "notistack";

// providers
import { useLoading } from "src/components/loading/LoadingProvider";

// components
import MYPieChart from "src/components/charts/piechart";
import useCustomTheme from "src/components/theme/useCustomTheme";
import DashboardLayout from "../components/layout/DashboardLayout";

// other details
const userName = "harry potter";

export {
  useLoading,
  useSnackbar,
  useCustomTheme,
  MYPieChart,
  DashboardLayout,
  userName,
};
