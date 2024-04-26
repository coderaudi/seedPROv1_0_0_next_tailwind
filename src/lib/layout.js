// library
import { useSnackbar } from "notistack";

// providers
import { useLoading } from "src/components/loading/LoadingProvider";
import useAuth from "src/components/hoc/useAuth";
import { useTheme } from "@emotion/react";

// components
import MYPieChart from "src/components/charts/piechart";
import useCustomTheme from "src/components/theme/useCustomTheme";
import DashboardLayout from "../components/layout/DashboardLayout";

// custom
import PageContainer from "src/components/container/pageContainer";
import CardContainer from "src/components/container/cardContainer";
import CustomizedDialogs from "src/components/dialog/dialog.component";
import CustomLoading from "src/components/loading/CustomLoading.component";

// other details
const userName = "harry potter";

export {
  useAuth,
  useTheme,
  useLoading,
  useSnackbar,
  useCustomTheme,
  MYPieChart,
  DashboardLayout,
  PageContainer,
  CardContainer,
  CustomizedDialogs,
  CustomLoading,
  userName,
};
