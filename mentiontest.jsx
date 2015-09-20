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
  render: function() {
    return (
      <MentionsInput value={this.state.value}>
        <Mention trigger="@" data={this.data.users} />
      </MentionsInput>
    )
  }
})
