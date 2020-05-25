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

class PersonDetails extends  React.Component{
    componentDidMount(){
        if(!this.props.person.length)
       this.props.action.getAllUserAction({limit:10,offset:0})
    }
    
render(){
  var matches = this.props.history.location.pathname.match(/(\d+)/);
    const record=this.props.person[matches[0]]
    const {classes}=this.props
    const rows=record ? record.films.length && record.films.map((listF)=>{
      return{list:listF}
    }):[]
    return(
      <div className={classes.root}>
      <Grid container spacing={1} className={classes.grid}>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Name:{record && record.name} </Paper>
        </Grid>
        <Grid item xs={3}>
    <Paper className={classes.paper}>Gender:{record &&  record.gender}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Eye Color:  {record &&  record.eye_color}</Paper>
        </Grid>
        <Grid item xs={3}>
    <Paper className={classes.paper}>Birth Year : {record &&  record.birth_year}</Paper>
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Home :{record &&  record.homeworld} </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Height::{record &&  record.height} </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Skin Color: :{record &&  record.skin_color}</Paper>
        </Grid>
        </Grid>
    </Grid>
    <List header={['Flims List']} rows={rows} noPagination={true}/>
    </div>
        
    )
}
}

const mapStateToProps=state=>{
    return {
    person:state.list.people,
    count:state.list.count
}}
const mapDispatchToProps=dispatch=>({
    action:bindActionCreators(ListAction,dispatch)
})
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(PersonDetails))