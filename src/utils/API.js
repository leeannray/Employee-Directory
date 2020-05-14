componentDidMount(){
  axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
  .then(json => json.data.results.map(result => (
    {
      name: `${result.name.first} ${result.name.last}`,
      id: result.registered
    })))
  .then(newData => this.setState({users: newData, store: newData}))
  .catch(error => alert(error))
}

export default API;
