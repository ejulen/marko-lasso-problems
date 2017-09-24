Repository illustrating a rather basic problem I'm having.

Build by running `node index`.
You should receive an error similar to this:

    Error: Render error. Exception: /path/to/repo/components/foo-bar/index.marko:1
    (function (exports, require, module, __filename, __dirname) { h1.foo -- Hello from foo-bar!
                                                                        ^^^^^

    SyntaxError: Unexpected identifier
    
Interestingly enough, it works if you remove the `lasso-*` tags, but then, you know, you don't get any Lasso functionality.
