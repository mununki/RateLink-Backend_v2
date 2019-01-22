import { Context, ContextWithUser, UserResponse } from "../../../types/resolver";
import { deletePrevProfileImage, uploadToS3 } from "../../../util/handleS3";
import privateResolver from "../../../util/privateResolver";

const allowedMIMEtypes = ["image/jpeg", "image/png", "image/git"];

const checkVaildJob_boolean = (inputJob: string): boolean => {
  const ENUM = ["0", "1", "2", "3"]; // 1: 선사, 2: 포워더, 3: 기타
  return ENUM.filter(job => job === inputJob).length === 1;
};

export default {
  Mutation: {
    updateProfile: async (root: any, args: any, ctx: Context): Promise<UserResponse> => {
      if (!ctx.user) {
        return { ok: false, data: null, error: "Log in required!" };
      }

      const { company, image, profile_name } = args;
      const { job_boolean } = args;

      if (!checkVaildJob_boolean(job_boolean)) {
        return { ok: false, data: null, error: "Invalid job selected" };
      }

      const profile = await ctx.prisma.account_myuserprofilesConnection({
        where: { owner: { id: ctx.user.id } }
      });

      await ctx.prisma.updateAccount_myuserprofile({
        data: { company, image, job_boolean, profile_name },
        where: { id: profile.edges[0].node.id }
      });

      return { ok: true, data: ctx.user, error: null };
    },
    updateProfileImage: privateResolver(
      async (root: any, args: any, ctx: ContextWithUser): Promise<UserResponse> => {
        const { createReadStream, filename, mimetype } = await args.file;
        const stream = createReadStream();

        // to handle the blob which doesn't have a extension
        // const reImageFile = /^([a-zA-Z0-9\s_\\.\-\(\):])+(.jpg|.jpeg|.gif|.png)$/;
        if (
          // !reImageFile.test(filename) ||
          allowedMIMEtypes.filter(type => type === mimetype).length < 1
        ) {
          await new Promise((resolve, reject) => {
            stream.resume();
            stream.on("end", () => {
              resolve(true);
            });
          });
          return { ok: false, data: null, error: "Image file only" };
        }

        const profile = await ctx.prisma.account_myuserprofilesConnection({
          where: { owner: { id: ctx.user.id } }
        });

        if (profile.edges[0].node.image !== "") {
          await deletePrevProfileImage(profile.edges[0].node.image);
        }

        const url = await uploadToS3({ stream, filename });

        await ctx.prisma.updateAccount_myuserprofile({
          data: { image: url },
          where: { id: profile.edges[0].node.id }
        });

        return { ok: true, data: ctx.user, error: null };
      }
    )
  }
};
