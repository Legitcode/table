##Install
`npm install react-legit-table`

##Another Table Component....

I know what you're thinking... Yet another one of these things, right? I was using Facebook's Fixed Data Table until I realized how big of a library it is. All I needed was a simple html table, so I made two little components that make up this library. It's as simple as it can be, and works great with bootstrap:

###Importing and setup
~~~js
import {Head, Rows} from 'react-legit-table'

let rows = [
  {
    id: 1,
    name: 'Zach',
    job: 'coding'
  },
  {
    id: 2,
    name: 'Jed',
    job: 'Being a boss'
  }
]
~~~

###Rendering

~~~js
render(){
  return (
    <table style={{height: 500}} className="table table-bordered">
      <Head row={row[0]} />
      <Rows rows={rows} />
    </table>
  )
}
~~~

The only thing the component expects other than a simple, regular ol' javascript objects, is an id column to be present. This is for setting the key on the child nodes.

###Requests?

I want to keep this simple and it has been perfect for my use case so far, but I'd love to hear suggestions.
