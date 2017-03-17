const i18n = { _: () => {} };

// valid context
i18n._('string', 'string context');
i18n._('string', "string context");
i18n._('string', `template string context`);
i18n._('string', 'Multiline context' +
       'that wrap across multiple' +
       'lines');
