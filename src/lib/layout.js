// library
import { useSnackbar } from "notistack";

// providers
import { useLoading } from "src/components/loading/LoadingProvider";

// components
import MYPieChart from "src/components/charts/piechart";
import useCustomTheme from "src/components/theme/useCustomTheme";
import DashboardLayout from "../components/layout/DashboardLayout";
import PageContainer from "src/components/container/pageContainer";

import useAuth from "src/components/hoc/useAuth";



// other details
const userName = "harry potter";


export {
  useAuth,
  useLoading,
  useSnackbar,
  useCustomTheme,
  MYPieChart,
  DashboardLayout,
  PageContainer,
  userName,
};
