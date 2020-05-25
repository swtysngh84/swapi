import React from 'react'
import {List} from '../../components'
import * as ListAction   from '../../action/index'
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const styles=theme=> ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid:{
    marginBottom:'10px'
  }
});

class FilmsDetails extends  React.Component{
    componentDidMount(){
        var matches = this.props.history.location.pathname.match(/(\d+)/);
       this.props.action.getSingleMovieAction(matches[0])
    }

    onClick=(id)=>{
        const url=this.props.currentView.characters[id]
        var matches = url.match(/(\d+)/);
        this.props.history.push(`/user/${matches[0]}`)
    }
render(){
  const {classes,currentView}=this.props
    const record=currentView
    const rows=currentView && currentView.characters ? currentView.characters.map((listF)=>{
      return{list:listF}
    }):[{}]
    return(
      <div className={classes.root}>
      <Grid container spacing={1} className={classes.grid}>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Title:{record && record.title} </Paper>
        </Grid>
        <Grid item xs={3}>
    <Paper className={classes.paper}>URL:{record &&  record.url}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Producer:  {record &&  record.producer}</Paper>
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={3}>
    <Paper className={classes.paper}>Director : {record &&  record.director}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Relase Date:{record &&  record.release_date} </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>No. of Episode :{record &&  record.episode_id} </Paper>
        </Grid>
        </Grid>
    </Grid>
    <List header={['Characters List']} rows={rows} noPagination={true} onClick={this.onClick}/>
    </div>
        
    )
}
}

const mapStateToProps=state=>{
    return {
        currentView:state.list.currentView
}}
const mapDispatchToProps=dispatch=>({
    action:bindActionCreators(ListAction,dispatch)
})
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(FilmsDetails))