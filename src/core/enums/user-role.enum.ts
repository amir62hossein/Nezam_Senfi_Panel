export enum UserRoles {
  UserReal = "UserReal",
  SupperAdmin = "SupperAdmin",
  AdminCountry = "AdminCountry",
  AdminProvince = "AdminProvince",
  Livestock = "Livestock",
  AdminJehadCountry = "AdminJehadCountry",
  ManagerJehadCountry = "ManagerJehadCountry",
  ExpertJehadCountry = "ExpertJehadCountry",
  AdminJehadProvince = "AdminJehadProvince",
  ManagerJehadProvince = "ManagerJehadProvince",
  ExpertJehadProvince = "ExpertJehadProvince",
  AdminJehadCounty = "AdminJehadCounty",
  ManagerJehadCounty = "ManagerJehadCounty",
  ExpertJehadCounty = "ExpertJehadCounty",
  ServiceCenterAdmin = "ServiceCenterAdmin",
  ServiceCenterManager = "ServiceCenterManager",
  ServiceCenterExpert = "ServiceCenterExpert",
  AreaExpert = "AreaExpert",
  UnionAdmin = "UnionAdmin",
  UnionManager = "UnionManager",
  FactoryManager = "FactoryManager",
  FactoryResponsibleUser = "FactoryResponsibleUser",
  SalesAgentResponsibleUser = "SalesAgentResponsibleUser",
  ImporterCompanyResponsibleUser = "ImporterCompanyResponsibleUser",
  CooperativeCompanyManager = "CooperativeCompanyManager",
  CooperativeCompanyResponsibleUser = "CooperativeCompanyResponsibleUser",
  UnionExpert = "UnionExpert",
}








// [Description("سوپر ادمین")]
//         SupperAdmin=1,
//         [Description("ادمین کشور")]
//         AdminCountry = 2,
        
//         [Description("ادمین استان")]
//         [ClaimName(locationName: "ProvinceAdmin.LocationId")]
//         AdminProvince = 3,

//         [Description("دامدار")]
//         Livestock = 4,

//         [Description("ادمین جهاد کشور")]
//         AdminJehadCountry = 5,
//         [Description("مدیر جهاد کشور")]
//         ManagerJehadCountry = 6,
//         [Description("کارشناس جهاد کشور")]
//         ExpertJehadCountry = 7,

//         [Description("ادمین جهاد استان")]
//         [ClaimName(locationName: "ProvinceJahadAdmin.LocationId")]
//         AdminJehadProvince = 8,
        
//         [Description("مدیر جهاد استان")]
//         [ClaimName(locationName: "ManagerJehadProvince.LocationId")]
//         ManagerJehadProvince = 9,
        
//         [Description("کارشناس جهاد استان")]
//         [ClaimName(locationName: "ExpertJehadProvince.LocationId")]
//         ExpertJehadProvince = 10,

//         [Description("ادمین جهاد شهرستان")]
//         [ClaimName(locationName: "AdminJehadCounty.LocationId")]
//         AdminJehadCounty = 11,
//         [Description("مدیر جهاد شهرستان")]
//         [ClaimName(locationName: "ManagerJehadCounty.LocationId")]
//         ManagerJehadCounty = 12,
//         [Description("کارشناس جهاد شهرستان")]
//         [ClaimName(locationName: "ExpertJehadCounty.LocationId")]
//         ExpertJehadCounty = 13,

//         [Description("ادمین مرکز خدمات")]
//         [ClaimName(locationName: "ServiceCenterAdmin.LocationId")]
//         ServiceCenterAdmin = 14,
//         [Description("مدیر مرکز خدمات")]
//         [ClaimName(locationName: "ServiceCenterManager.LocationId")]
//         ServiceCenterManager = 15,
//         [Description("کارشناس مرکز خدمات")]
//         [ClaimName(locationName: "ServiceCenterExpert.LocationId")]
//         ServiceCenterExpert = 16,

//         [Description("کارشناس پهنه")]
//         [ClaimName(locationName: "AreaExpert.LocationId")]
//         AreaExpert = 17,

//         [Description("ادمین اتحادیه")]
//         [ClaimName(locationName: "UnionAdmin.LocationId")]
//         UnionAdmin = 18,
//         [Description("مدیر اتحادیه")]
//         [ClaimName(locationName: "UnionManager.LocationId")]
//         UnionManager = 19,
//         [Description("کارشناس اتحادیه")]
//         [ClaimName(locationName: "UnionExpert.LocationId")]
//         UnionExpert = 20,
        
//         [Description("مدیر کارخانه")]
//         FactoryManager = 21, 
//         [Description("کاربر مسئول کارخانه")]
//         FactoryResponsibleUser = 22,

//         [Description("کاربر مسئول عامل فروش")]
//         SalesAgentResponsibleUser = 23,
        
//         [Description("کاربر مسئول شرکت وارد کننده")]
//         ImporterCompanyResponsibleUser = 24,
        
//         [Description("مدیر شرکت تعاونی")]
//         CooperativeCompanyManager = 25,
//         [Description("کاربر شرکت تعاونی")]
//         CooperativeCompanyResponsibleUser = 26,