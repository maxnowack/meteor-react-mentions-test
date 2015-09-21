MentionTest = React.createClass({
  displayName: 'MentionTest',
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      users: [{
        display: 'John Doe',
        id: 'john'
      }]
    };
  },
  getInitialState: function() {
    return {
      value: ""
    };
  },
  handleChange: function(ev) {
    console.log(this, arguments);
    this.setState({value: ev.target.value});
  },
  render: function() {
    return (
      <MentionsInput value={this.state.value} onChange={this.handleChange}>
        <Mention trigger="@" data={this.data.users} />
      </MentionsInput>
    )
  }
})
