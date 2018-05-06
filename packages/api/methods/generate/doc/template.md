## <%= api %>

METHOD | PARAMS | RETURN
-------|--------|-------
<% _.forEach(methods, function(method) { %><%= method.name %> | <%= method.args.join(', ') %> | <%= method.ret.join(', ') %>
<% }); %>

### Exemples

```js<% _.forEach(_.take(_.shuffle(methods), 2), function(method) { %>
client.<%= _.camelCase(_.replace(api, '_api')) %>.<%= _.random(0, 1) === 0 ? _.camelCase(method.name) : method.name %>({<%= method.args.join(', ') %>})
  .then(result => {  })
<% }); %>
```
