# TemplateValue

The following documentation describes how to use this feature programatically. Configuration of embedded `TemplateValue`'s
will vary.

```javascript
const tmpl = new TemplateValue(template, options);
```

## template

```javascript
// hard coded
template = 'Hello, World!';
template = 'true';
template = '42';
template = '3.14159265358979';

// dynamic un-escaped
template = 'Hello, <%= ctx.name %>!'; // input = { name: 'World' }
template = '<%= ctx.page %>'; // input = { page: 100 }
template = '<%= ctx.hasNextPage %>'; // input = { hasNextPage: true }
// dynamic escaped
template = 'Example:\n```\n<%- ctx.code %>\n```'; // input = { code: '...' }
```

## options

| Parameter  | Type      | Required | Description                                                                                                                     | Example                             | Default  |
| ---------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | -------- |
| `type`     | `string`  | false    | The output format.                                                                                                              | `string`, `int`, `float`, `boolean` | `string` |
| `compiled` | `boolean` | false    | Caching option for compiled templates. This can greatly improve performance, but can also have an impact on application memory. | `true`, `false`                     | `true`   |
