import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header:{
   backgroundColor:'#16115a61' ,
   '& .MuiTableCell-head':{
    fontWeight:'600 !important' 
   }
  },
  pagination:{
    display:'flex',
    justifyContent:'flex-end',
    padding:'10px'
  }
}))

const  List =(props)=>{
  const classes = useStyles();
    const{rows,header,count,noPagination}=props;
    const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    props.onPageChange()
  };
  return(
    <><TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className={classes.header}>
          <TableRow>{
              header.map((head)=>(
                <TableCell className={classes.cell}>{head}</TableCell>       
                ))
              }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => {
            const column=Object.keys(row);
            return <TableRow key={row.name} onClick={()=>props.onClick(index)}>{
              column.map((list,index)=>(
                  <TableCell>{row[list]}</TableCell>
            ))
                } 
          </TableRow>
          })}
        </TableBody>
      </Table>
      {!noPagination && <Pagination count={count===rows.length ? 1:count} page={page} onChange={handleChange} className={classes.pagination}/>}
    </TableContainer>
  </>
)
}

export default List