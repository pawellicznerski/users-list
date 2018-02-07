import React, {Component} from "react";

export default class Table extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div className="Excel">
        {this._renderTable()}
        table component
      </div>
    )
  }

  _renderTable() {
    const data=     fetch('https://jsonplaceholder.typicode.com/posts/users').then(resp => resp.json())
          .then(data => {
            if(data.length!==0){
              console.log("som danych");
            } else if (data.length===0){
              console.log("som danych");
            }
          });
  //   return (
  //     <table>
  //       <thead>
  //         <tr>{
  //           this.schema.map(item => {
  //             if (!item.show) {
  //               return null;
  //             }
  //             let title = item.label;
  //             if (this.state.sortby === item.id) {
  //               title += this.state.descending ? ' \u2191' : ' \u2193';
  //             }
  //             return (
  //               <th
  //                 className={`schema-${item.id}`}
  //                 key={item.id}
  //                 onClick={this._sort.bind(this, item.id)}
  //               >
  //                 {title}
  //               </th>
  //             );
  //           }, this)
  //         }
  //         <th className="ExcelNotSortable">Akcje</th>
  //         </tr>
  //       </thead>
  //       <tbody onDoubleClick={this._showEditor.bind(this)}>
  //         {this.state.data.map((row, rowidx) => {
  //           return (
  //             <tr key={rowidx}>{
  //               Object.keys(row).map((cell, idx) => {
  //                 const schema = this.schema[idx];
  //                 if (!schema || !schema.show) {
  //                   return null;
  //                 }
  //                 const isRating = schema.type === 'rating';
  //                 const edit = this.state.edit;
  //                 let content = row[cell];
  //                 if (!isRating && edit && edit.row === rowidx && edit.key === schema.id) {
  //                   content = (
  //                     <form onSubmit={this._save.bind(this)}>
  //                       <FormInput ref="input" {...schema} defaultValue={content} />
  //                     </form>
  //                   );
  //                 } else if (isRating) {
  //                   content = <Rating readonly={true} defaultValue={Number(content)} />;
  //                 }
  //                 return (
  //                   <td
  //                     className={classNames({
  //                       [`schema-${schema.id}`]: true,
  //                       'ExcelEditable': !isRating,
  //                       'ExcelDataLeft': schema.align === 'left',
  //                       'ExcelDataRight': schema.align === 'right',
  //                       'ExcelDataCenter': schema.align !== 'left' && schema.align !== 'right',
  //                     })}
  //                     key={idx}
  //                     data-row={rowidx}
  //                     data-key={schema.id}>
  //                     {content}
  //                   </td>
  //                 );
  //               }, this)}
  //               <td className="ExcelDataCenter">
  //                 <Actions onAction={this._actionClick.bind(this, rowidx)} />
  //               </td>
  //             </tr>
  //           );
  //         }, this)}
  //       </tbody>
  //     </table>
  //   );
  }

}
