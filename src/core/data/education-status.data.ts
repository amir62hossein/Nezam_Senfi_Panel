import { EducationStatus } from "../enums/education-status.enums";

export const EducationStatusData = [
  { value: EducationStatus.PhdPlus, label: "فوق دکترا" },
  { value: EducationStatus.Phd, label: "دکترا" },
  { value: EducationStatus.Master, label: "کارشناسی ارشد" },
  { value: EducationStatus.Bachelor, label: "کارشناسی" },
  { value: EducationStatus.CertificatePlus, label: "فوق دیپلم" },
  { value: EducationStatus.Certificate, label: "دیپلم" },
  { value: EducationStatus.MiddleSchoolDegree, label: "سیکل" },
  { value: EducationStatus.Elementary, label: "ابتدایی" },
  { value: EducationStatus.Illiterate, label: "بی سواد" },
];
