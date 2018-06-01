// import plugins.
const tasksListPlugin = require('markdown-it-task-lists')
const highlightPlugin = require('markdown-it-highlightjs')

// export plugins instances.
export default {
  tasksList: tasksListPlugin,
  highlight: highlightPlugin
}
