import {defineSchema, defineTable} from 'convex/server';
import { v } from 'convex/values';  //   v is a helper function to create a value object.

export default defineSchema({

    // Define a table named 'users' with columns 'id', 'name', 'email', 'password'.

    users: defineTable({
        
        name: v.string(),
        email: v.string(),
        // password: v.string(),  // Do not expose password in schema
        photoURL: v.string(),
        credits : v.number(),
    }),
});