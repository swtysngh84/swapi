import React from 'react'
import {List} from '../../components'
import * as ListAction   from '../../action/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class FilmList extends  React.Component{
    componentDidMount(){
this.props.action.getAllMovieAction({limit:10,offset:0})
    }
    onPageChange()
    {       this.props.action.getAllMovieAction({limit:10,offset:this.props.movie.length-10})
    }
render(){
    const header=['Title','Url','Producer','Director','Relase Date']
    debugger
    const row=[]
    this.props.movie && this.props.movie.map((data)=>{
        row.push({name:data.title,url:data.url,'producer':data.producer,director:data.director,'release_date':data.release_date})
    })
    
    return(
        <List header={header} rows={row} count={this.props.count} onPageChange={this.onPageChange}/>
    )
}
}

const mapStateToProps=state=>{
    return {
        movie:state.list.movie,
    count:state.list.count
}}
const mapDispatchToProps=dispatch=>({
    action:bindActionCreators(ListAction,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(FilmList)