import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NUXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default defineEventHandler(async (event) => {
  const name = getQuery(event).name;
  if (!name) {
    throw createError({ statusCode: 400, statusMessage: "Missing activity name" });
  }

  // Get the activity id
  const { data: activity, error: activityError } = await supabase
    .from("activities")
    .select("id")
    .eq("name", name)
    .single();

  if (activityError || !activity) {
    throw createError({ statusCode: 404, statusMessage: "Activity not found" });
  }

  // Get the teacher(s) for this activity
  const { data: teacherLinks, error: teacherLinkError } = await supabase
    .from("teacher_activity")
    .select("teacher_id, teachers(*)")
    .eq("activity_id", activity.id);

  if (teacherLinkError) {
    throw createError({ statusCode: 500, statusMessage: teacherLinkError.message });
  }

  // Return the teacher(s) info
  return teacherLinks.map(link => link.teachers);
});