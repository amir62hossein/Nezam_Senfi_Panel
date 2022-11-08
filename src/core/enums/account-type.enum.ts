export enum BankAccountTypeEnum {
  /// <summary>
  //  حساب قرض الحسنه
  /// </summary>
  InterestFreeAccount = 1,

  /// <summary>
  //    حساب قرض الحسنه جاری
  /// </summary>
  CurrentInterestFreeAccount = 2,
  /// <summary>
  //  حساب قرض الحسنه پس انداز"
  /// </summary>
  SavingInterestFreeAccount = 3,
  /// <summary>
  //   حساب سرمایه گذاری
  /// </summary>
  InvestmentAccount = 4,
  /// <summary>
  //    حساب سرمایه گذاری کوتاه مدت
  /// </summary>
  ShortTermInvestmentAccount = 5,
  /// <summary>
  //    حساب سرمایه گذاری مدت دار
  /// </summary>
  TermInvestmentAccount = 6,
}
