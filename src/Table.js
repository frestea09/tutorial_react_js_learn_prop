import React,{Component} from 'react'
const TableHead = () =>{
    return(
        <thead>
            <tr>
                <td>Nim</td>
                <td>Nama</td>
            </tr>
        </thead>
    )
}
const TableBody = props => {
    const rows = props.isiData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }
class Table extends Component {
    render() {
      const { dataIsi } = this.props
  
      return (
        <table>
          <TableHead />
          <TableBody isiData={dataIsi} />
        </table>
      )
    }
  }
export default Table