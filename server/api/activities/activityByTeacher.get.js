import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NUXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default defineEventHandler(async (event) => {
  // Get teacher name and activity type from query parameters
  const { name, type } = getQuery(event);
  if (!name) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing teacher name",
    });
  }

  // 1. Get the teacher's ID from the teachers table
  const { data: teacher, error: teacherError } = await supabase
    .from("teachers")
    .select("id")
    .eq("name", name)
    .single();

  if (teacherError || !teacher) {
    throw createError({ statusCode: 404, statusMessage: "Teacher not found" });
  }

  // 2. Query the teacher_activity join table for activities linked to this teacher
  //    Also join the activities table to get full activity details
  let activityLinksQuery = supabase
    .from("teacher_activity")
    .select("activity_id, activities(*)")
    .eq("teacher_id", teacher.id);

  // Filter activities by type 
  if (type) {
    activityLinksQuery = activityLinksQuery.eq("activities.type", type);
  }

  const { data: activityLinks, error: activityLinksError } =
    await activityLinksQuery;

  if (activityLinksError) {
    throw createError({
      statusCode: 500,
      statusMessage: activityLinksError.message,
    });
  }

  // 3. Return an array of activity objects for this teacher
  return activityLinks.map((link) => link.activities);
});
