import React from 'react';
import FormItemProps from './FormItemProps';

class Table extends React.Component{

  static propTypes = FormItemProps.getPropType();

  render() {
    if (this.validateTableData()){
      return <div className = {'form-group col-' + this.props.grid.container} >
        <div className = "row" >
          <table className = {'table col-' + this.props.grid.container} >
            <thead>
              <tr >
              {this.props.itemprops.columns.map(
                function (column) { 
                  return <th scope="col" key = {column.code} className = "" >
                    {column.description} 
                  </th>;
                })}
                </tr>
            </thead>
            <tbody>
              {this.props.itemprops.rows.map(
                function (row){
                  return <tr scope="row">{row.map(
                    function(rowdata){
                      return <td>{rowdata}</td>;
                    }
                  )}</tr>;
                }
              )}
            </tbody>
          </table>
        </div>
      </div>;
    }
    else
      return <div>Invalid Table definition. Check Console For the error</div>;
  }

  validateTableData(){
    if (this.props.itemprops == null){
      console.error('Item Properties is null');
      return false;
    }
    if (!this.props.itemprops.columns == null){
      console.error('column is null');
      return false;
    }
    let columnCount = this.props.itemprops.columns.length;
    let rows = this.props.itemprops.rows;
    if ((rows != null) && (rows[0].length != columnCount)){
      console.error('Row and column counts dont match');
      return false;
    } 
    return true;

  }

}

export default Table;