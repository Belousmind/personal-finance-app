import {
  HomeIcon,
  TransactionsIcon,
  BudgetsIcon,
  PotsIcon,
  RecurringBillsIcon,
} from "@/components";
import { ROUTES } from "@/constants";

export type NavigationItem = {
  icon: React.ReactElement;
  link: (typeof ROUTES)[keyof typeof ROUTES];
  label: string;
};

export const NAVIGATION_DATA: NavigationItem[] = [
  {
    icon: <HomeIcon />,
    link: ROUTES.HOME,
    label: "overview",
  },
  {
    icon: <TransactionsIcon />,
    link: ROUTES.TRANSACTIONS,
    label: "transactions",
  },
  {
    icon: <BudgetsIcon />,
    link: ROUTES.BUDGETS,
    label: "budgets",
  },
  {
    icon: <PotsIcon />,
    link: ROUTES.POTS,
    label: "pots",
  },
  {
    icon: <RecurringBillsIcon />,
    link: ROUTES.RECURRING_BILLS,
    label: "recurring bills",
  },
];
