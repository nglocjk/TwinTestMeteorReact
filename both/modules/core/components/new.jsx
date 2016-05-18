import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CircularProgress from 'material-ui/lib/circular-progress';
import CardHeader from 'material-ui/lib/card/card-header';
import htmlDecode from '../configs/htmlDecode';

const New = React.createClass({
  // contextTypes declares the keys that this component expects
  // to receive through context, and their corresponding value types
  contextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getInitialState() {
    return {
      muiTheme: this.context.muiTheme,
    };
  },
  // update theme here
  componentWillMount() {
    let newMuiTheme = this.state.muiTheme;
    this.setState({
      muiTheme: newMuiTheme,
    });
  },
  componentDidMount(){
    $('.htmlContent img').on('click',function () {
      var src = $(this).attr('src');
      if (Meteor.isCordova) {
        var ref = cordova.InAppBrowser.open(src, '_blank', 'location=no,zoom=yes,enableViewportScale=yes,closebuttoncaption=Đóng lại')
      }
    });
  },
  // the app bar and button will receive our theme through
  // context and style accordingly
  render() {
    const {data} = this.props;
    if (!FlowRouter.subsReady()) {
      return <div style={{textAlign:'center'}}><CircularProgress size={0.5}/></div>;
    }
    return (
      <div>
        {data ? <Card>
          <CardHeader
            title={data.Name}/>
          <CardText>
            <div className="htmlContent" dangerouslySetInnerHTML={{__html: htmlDecode(data.Content)}}></div>
          </CardText>
        </Card> : ""}
      </div>

    );
  },
});


export default New;
