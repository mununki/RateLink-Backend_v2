import { Account_myuserprofile } from "../../../../generated/prisma-client";
import { UserProfile } from "../../../types/graph";
import { Context } from "../../../types/resolver";

export default {
  User: {
    profile: async (root: any, args: any, ctx: Context): Promise<Account_myuserprofile | string> => {
      let myProfile: Account_myuserprofile[];

      myProfile = await ctx.prisma.account_myuserprofiles({
        where: { owner: { id: root.id } }
      });
      if (myProfile) {
        return myProfile[0];
      } else {
        return "no profile";
      }
    }
  }
};
