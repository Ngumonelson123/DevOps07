<% if (user) { %>
    <h2><%= user.name %></h2>
  <% } %>

  let template = ejs.compile(str, options);
  template(data);
  // => Rendered HTML string
  
  ejs.render(str, data, options);
  // => Rendered HTML string
  
  ejs.renderFile(filename, data, options, function(err, str){
      // str => Rendered HTML string
  });
