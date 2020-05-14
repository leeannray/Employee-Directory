componentDidMount(){
  axios.get('https://randomuser.me/api/?results=50&inc=name,registered&nat=us')
  .then(json => json.data.results.map(result => (
    {
      name: `${result.name.first} ${result.name.last}`,
      id: result.registered
    })))
  .then(newData => this.setState({users: newData, store: newData}))
  .catch(error => alert(error))
}

export default API;
