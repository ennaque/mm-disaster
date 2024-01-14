export enum AdminNotificationType {
    VIEW_TIMELINE = 'start_trial_to_view_timeline',
    MESSAGE_TO_TIMELINE = 'start_trial_to_add_message_to_timeline',
    RETROSPECTIVE = 'start_trial_to_access_retrospective',
    PLAYBOOK_GRANULAR_ACCESS = 'start_trial_to_restrict_playbook_access',
    PLAYBOOK_CREATION_RESTRICTION = 'start_trial_to_restrict_playbook_creation',
    EXPORT_CHANNEL = 'start_trial_to_export_channel',
    MESSAGE_TO_PLAYBOOK_DASHBOARD = 'start_trial_to_access_playbook_dashboard',
    PLAYBOOK_METRICS = 'start_trial_to_access_metrics',
    CHECKLIST_ITEM_DUE_DATE = 'start_trial_to_set_checklist_item_due_date',
    REQUEST_UPDATE = 'start_trial_to_request_update',
}
