const i18n = { _: () => {} };

// no context
i18n._('string');
i18n._('string', null);
i18n._('string', undefined);
i18n._('string', '');
i18n._('string', ``);
