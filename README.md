# Todo app

This is my awesome todo app, which I created for some `React` practice. Here I'd like to share my journey, how I built this simple `React` app.

As I didn't want to waste time with setting up `webpack-dev-server` and `babel`, I bootstrapped this project with [Create React App](https://github.com/facebookincubator/create-react-app).

## Journey

I'll highlight here the topics that caused some :thinking: moments.

### Handling `state`
Before I started writing this app, I was thinking of keeping every component as a stateless component except the parent (in this case, `Todo.js`).

So I created a simple `data.json` file with some mocked data.
Mocked data structure:
```json
[
  {
  "name": "foo",
  "isDone": true
  }
]
```
At first, in the parent component I gave the `data.json` to initial state.
But I figured out it would be a better solution to set an empty array as the initial state and pass `data.json` only in the `componentWillMount` method.

```jsx
class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listItems: []
    };
  }

  componentWillMount() {
    this.setState({
      listItems: data
    });
  }

  ...

}
```

Here came the nasty part. I created a new file, called `TodoList.js`, but as I wrote earlier I wanted to keep it stateless, rather have the states in the parent and the `List` child should get its content via props.:

```jsx
// Todo.js
...
render() {
    return (
      <div id="todo">
        <div className="header">My awesome todo app</div>
        <List listItems={ this.state.listItems } onChange={ this.handleListChange.bind(this) }/>
      </div>
    );
  }

 // TodoList.js
 ...
 render() {
    return (
      <p>Unfinished tasks</p>
        <ul className="unfinished-items">
          {
            this.props.listItems.filter(filteredItem => !filteredItem.isDone).map((item, i)=>(
              <li
                key={`list-item-${i}`}
                className="unfinished-item"
              >
                { item.name }
              </li>
            ))
          }
        </ul>
      <p>Done</p>
        <ul className="done-items">
          {
            this.props.listItems.filter(filteredItem => filteredItem.isDone).map((item, i)=>(
              <li
                key={`list-item-${i}`}
                className="done-item"
              >
                { item.name }
              </li>
            ))
          }
        </ul>
    )
 }
```

Above you can see that I filter through `this.props.listItems`, then call a map function on it to return the unfinished and done tasks.

So far so good \o/, I guess.

The next challenge was that how I should let the parent know, which item was clicked on in its child, `TodoList.js`.

### `.bind(this)` :anguished:

## Summary
