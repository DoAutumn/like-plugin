import { InjectionToken } from "@angular/core";

export abstract class Advanced {
  static component: any;
  static path: string;
  static label: string;
}

export const AdvancedToken: InjectionToken<Advanced> = new InjectionToken('AdvancedToken');