import { mutationGeneric } from "convex/server";
import { v } from "convex/values";

export const createNewUser = mutationGeneric({
    args:{
        name: v.string(),
        email: v.string(),
        photoURL: v.string(),
    },
    handler:async(ctx , args) =>{

        // check if user already exists
        const user = await ctx.db.query("users")
        .filter((q)=> q.eq(q.field("email"),args.email))
        .collect();

        if(!user[0]?.email){
            const userData = {
                name: args.name,
                email: args.email,
                photoURL: args.photoURL,
                credits: 3
            }
            // user doesn't exist, create new user
            const result = await ctx.db.insert("users",userData);
            return userData
        }
        return user[0];
    }
})
