// To parse this data:
//
//   import { Convert, UserFb } from "./file";
//
//   const userFb = Convert.toUserFb(json);

export interface User {
  id?:          number;
  username?:    null;
  password?:    string;
  createdTime?: string;
  updatedTime?: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toUserFb(json: string): User {
      return JSON.parse(json);
  }

  public static userFbToJson(value: User): string {
      return JSON.stringify(value);
  }
}
