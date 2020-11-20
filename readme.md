# Getting Started

## Installation
When starting a new project, you will want to: open up a terminal/command prompt, make a new directory, and navigate into it.
```
$ git clone git@gitlab.com:SlamFrontend/slam-boilerplate.git temp; mv temp/{*,.*} .; rmdir temp
```
to connect the project to your Git, you must change the git remote url to your
```
$ git remote set-url origin <your git link>
```

then, run the NPM install.
```
$ npm i
```
Once everything is installed, you will see a project structure like below:

```
├── gulp-tasks/                                 # Folder for gulp tasks
|   └── task-name.js                            # Build related logic/code
├── local/                                      # Folder for production build output
├── src/
|   ├── assets/
|       ├── css/                                # Global styles
|       ├── favicon/                            # Favicon image and date
|       ├── fonts/                              # Fonts
|       ├── images/                             # Images
|       ├── js/                                 # Global scripts, vendors
|       ├── sprites/                            # SVG sprites
|       └── video/                              # Video
|   ├── components/                             # Components
|       └── components-name/                    # Component folder
|           ├── components-name.pug             # Component template
|           ├── mixin__components-name.pug      # (optional) Component template in the form of a mixin, to the possibility of calling in any part of the project
|           ├── style.scss                      # (optional) Component style
|           ├── critical.scss                   # (optional) Critical style if component styles need to be loaded before content is displayed
|           └── script.js                       # (optional) Components script
|   ├── layout/                                 # Layout structure for app
|   |   └── layout.pug
|   ├── mixins/                                 # Global mixins
|   |   └── mixins-name/                        # Mixin folder
|   |       ├── mixins-name.pug                 # Mixin template
|   |       ├── style.scss                      # (optional) Mixin style
|   |       └── script.js                       # (optional) Mixin script
|   ├── pages/                                  # Pages
|   |   └── page-name.pug
|   └── utility/                                # System mixin, global data, helper functions
|       └── utility-name.pug
├── gulpfile.js                                 # Gulp task configuration
└── package.json                                # Dependencies and site/folder configuration
```


Congratulations! You should now have successfully created a Slamdunk project and are ready to start building out your site/app.
Now you can run the following npm scripts:
- `gulp` for previewing your site/app on a development server.
