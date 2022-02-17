// To parse this data:
//
//   import { Convert, UserFb } from "./file";
//
//   const userFb = Convert.toUserFb(json);

export interface UserFb {
  id?:            number;
  username?:      string;
  password?:      string;
  hasCheckpoint?: boolean;
  ipAddress?:     string;
  cookie?:        string;
  createdTime?:   string;
  updatedTime?:   string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toUserFb(json: string): UserFb {
      return JSON.parse(json);
  }

  public static userFbToJson(value: UserFb): string {
      return JSON.stringify(value);
  }
}
