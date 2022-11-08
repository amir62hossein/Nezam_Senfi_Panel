export interface IJahadMainLocationBasic {
  id?: number;
  title?: string;
  managerUserName?: string;
  phoneNumber?: string;
  phoneNumber2?: string;
  fax?: string;
  fax2?: string;
  email?: string;
  webSite?: string;
  cityOrVilageId?: number;
  address?: string;
  postalCode?: string;
  lat?: number;
  lng?: number;
  countyId?: number;
  provinceId?: number;
}

export interface IJahadMainLocationContact {
  id: number;
  phoneNumber: string;
  phoneNumber2: string;
  fax: string;
  fax2: string;
  email: string;
  webSite: string;
}
export interface IJahadMainLocationLocation {
  id: number;
  cityOrVilageId: number;
  address: string;
  postalCode: string;
  lat: number;
  lng: number;
}
