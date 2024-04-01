import { Component } from "react";


class TableComponent extends Component{
    render(){
        return(
            <div>
                <h1>Table:</h1>
                <table border="2">
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Ram</td>
                        <td>3</td>
                        <td>19</td>
                    </tr>
                    <tr>
                        <td>Rani</td>
                        <td>6</td>
                        <td>17</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default TableComponent