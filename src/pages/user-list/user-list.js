import React from 'react'
import {List} from '../../components'
import * as ListAction   from '../../action/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class UserList extends  React.Component{
    componentDidMount(){
        this.props.action.getAllUserAction({limit:10,offset:0})
    }
    onPageChange=()=>
    {       this.props.action.getAllUserAction({limit:10,offset:this.props.person.length-10})
    }
    onClick=(id)=>{
        this.props.history.push(`/user/${id}`)
    }
render(){
    const header=['Name','Gender','Eye color','Birth year','Home World','Height','Skin color']
    const row=[]
    this.props.person && this.props.person.map((data)=>{
        row.push({name:data.name,gender:data.gender,eye_color:data.eye_color,birthYear:data.birth_year,home:data.homeworld,
        height:data.height,skinColor:data.skin_color})
    })
    
    return(
        <List header={header} rows={row} count={this.props.count} onPageChange={this.onPageChange} onClick={this.onClick}/>
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
export default connect(mapStateToProps,mapDispatchToProps)(UserList)