import { BankAccountTypeEnum } from "../enums/account-type.enum";
export const BankAccountTypeData = [
  {
    value: BankAccountTypeEnum.InterestFreeAccount,
    label: "حساب قرض الحسنه",
  },
  {
    value: BankAccountTypeEnum.CurrentInterestFreeAccount,
    label: "حساب قرض الحسنه جاری",
  },
  {
    value: BankAccountTypeEnum.SavingInterestFreeAccount,
    label: "حساب قرض الحسنه پس انداز",
  },
  {
    value: BankAccountTypeEnum.InvestmentAccount,
    label: "حساب سرمایه گذاری",
  },
  {
    value: BankAccountTypeEnum.ShortTermInvestmentAccount,
    label: "حساب سرمایه گذاری کوتاه مدت",
  },
  {
    value: BankAccountTypeEnum.TermInvestmentAccount,
    label: "حساب سرمایه گذاری مدت دار",
  },
];
