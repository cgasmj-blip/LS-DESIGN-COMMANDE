-- Complete baseline RLS policies for LS DESIGN.

create policy "role_mappings_authenticated_read"
on ls_design.role_mappings for select
to authenticated
using (true);

create policy "app_settings_authenticated_read"
on ls_design.app_settings for select
to authenticated
using (true);

create policy "audit_log_actor_read"
on ls_design.audit_log for select
to authenticated
using (actor_profile_id = (select auth.uid()));
