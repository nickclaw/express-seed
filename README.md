express-seed
------------

## Setup
```shell
npm install
bower install
# modify config/{development,testing,production}.json
grunt
```

## Environments
You can change the environment your app runs in by setting the `NODE_ENV` variable in your environment. Both `npm start` and `grunt default` will run your app in the `development` environment, while `npm test` will use `testing`.

## Modifying

The master branch of this repository tries to assume as little as possible about the rest of your stack, choosing to give a very simple starting point to build around. Some tips to make development easier while flushing out the rest of your stack..

##### Database
1. Create a `server/database.js` file to contain useful database-related function, __and__ that exports all your models, then you can do this in your routers to easily access your models.
        var {User, Item}  = require('./path/to/database'))

2. Have your `server/database.js` file's `module.exports` be a promise that resolves once the database has successfully connected. Then the worker process can safely suicide if the app cannot be run.

##### Angular
1. Install all front-end dependencies using `bower install --save <packages>`. You can then include them in your html from `/static/lib/<package>/file.js`.

2. Put all external templates in the `public/src/template/` directory, the Gruntfile htmlmin task depends on them being there.
