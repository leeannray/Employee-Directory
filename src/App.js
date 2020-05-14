import axios from "axios";

componentDidMount() {
  axios.get(
    'https://randomuser.me/api/?results=10&inc=name,registered&nat=us'
  )
    .then(json => json.data.results.map(result => (
      {
        name: `${result.name.first} ${result.name.last}`,
        id: result.registered
      }
    )
    )
    )
    .then(newData => this.setState(
      { users: newData, store: newData }
    ))
  .catch (
  error => alert(error)
  );
};

filterNames(e){
  this.setState({
    users: this.state.store.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()
    ));
  }
  )
};

export default class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {person: []};
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    $.getJSON('https://randomuser.me/api/')
      .then(({ results }) => this.setState({ person: results }));
  }

  render() {
    const persons = this.state.person.map((item, i) => (
      <div>
        <h1>{ item.name.first }</h1>
        <span>{ item.cell }, { item.email }</span>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ persons }</div>
      </div>
    );
  }
};
// class App extends React.Component {
//   state = {
//     users,
//     first: 1,
//     last: 1,
//     email: 1,
//     sort: "",
//     search: ""

//   }

//   handleNameSort = (name, order) => {
//     this.setState({
//       users: this.state.users.sort((a, b) => (a.name[name] > b.name[name] ? order : -order))
//     });
//   }

//   handleSort = (name, order) => {
//     this.setState({
//       users: this.state.users.sort((a, b) => (a[name] > b[name] ? order : -order))
//     });
//   }

//   searchFilter = (name) => {
//     this.setState({
//       users: users.filter(person => {
//         returnperson.name.first.toLowerCase().includes(name.toLowerCase())
//           || person.name.last.toLowerCase().includes(name.toLowerCase())
//           || PerformanceResourceTiming.email.replace(/\D/g, "").includes(name)
//           || person.email.includes(name)
//       }),
